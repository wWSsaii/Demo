# -*- coding: utf-8 -*-
"""优化 Demo 媒体素材：GIF → 动画 WebP，截图/头像 → 压缩 WebP，生成静态海报帧。
原文件保留不动，产物输出到 data/web/ 目录。"""
import os
import sys
from PIL import Image, ImageSequence

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")
OUT = os.path.join(DATA, "web")
os.makedirs(OUT, exist_ok=True)


def gif_to_webp(src, dst, target_w, quality, max_frames, method=4):
    im = Image.open(src)
    n = im.n_frames
    step = max(1, n // max_frames)
    frames = []
    durations = []
    for i in range(0, n, step):
        im.seek(i)
        f = im.convert("RGB")
        if f.width > target_w:
            f = f.resize((target_w, int(f.height * target_w / f.width)), Image.LANCZOS)
        frames.append(f)
        durations.append(max(30, int(im.info.get("duration", 60))))
    frames[0].save(
        dst, save_all=True, append_images=frames[1:],
        duration=durations, loop=0, format="WEBP",
        quality=quality, method=method, minimize_size=False,
    )
    print(f"gif→webp {os.path.basename(src)}: {n}帧 → {len(frames)}帧, {os.path.getsize(dst)//1024}KB")


def static_webp(src, dst, target_w=None, quality=80):
    im = Image.open(src)
    im = im.convert("RGB")
    if target_w and im.width > target_w:
        im = im.resize((target_w, int(im.height * target_w / im.width)), Image.LANCZOS)
    im.save(dst, format="WEBP", quality=quality, method=4)
    print(f"static {os.path.basename(src)}: {os.path.getsize(dst)//1024}KB")


if __name__ == "__main__":
    # 1) 两个工作流/演示 GIF → 动画 WebP + 静态海报帧
    gif_to_webp(os.path.join(DATA, "工作流.gif"), os.path.join(OUT, "workflow-demo.webp"),
                target_w=960, quality=58, max_frames=360)
    static_webp(os.path.join(DATA, "工作流.gif"), os.path.join(OUT, "workflow-poster.webp"), 960, 72)
    gif_to_webp(os.path.join(DATA, "海小智.gif"), os.path.join(OUT, "haixiaozhi-demo.webp"),
                target_w=880, quality=52, max_frames=360)
    static_webp(os.path.join(DATA, "海小智.gif"), os.path.join(OUT, "haixiaozhi-poster.webp"), 880, 72)

    # 2) i跑校园 截图 → 手机屏宽 540px WebP
    for i in range(1, 12):
        src = os.path.join(DATA, f"i跑校园 ({i}).jpg")
        if os.path.exists(src):
            static_webp(src, os.path.join(OUT, f"campus-{i:02d}.webp"), 540, 76)

    # 3) ChatGPT 对话图 → 560px WebP
    static_webp(os.path.join(DATA, "chatgpt.png"), os.path.join(OUT, "chatgpt.webp"), 560, 76)

    print("DONE →", OUT)
