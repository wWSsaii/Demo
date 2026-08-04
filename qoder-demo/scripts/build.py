# -*- coding: utf-8 -*-
"""build.py —— 把 data/data.js 内联进 index.html，生成可直接部署的「单文件」版本。

用法:
    python scripts/build.py

原理:
    1. 读取 data/data.js（数据源，编辑数据请改这个文件）
    2. 在 index.html 中找到 <script src="data/data.js"></script>
    3. 替换为内联的 <script>window.PORTFOLIO_DATA = {...};</script>
    4. 生成后的 index.html 不依赖外部 JS 文件，双击即可在浏览器运行，
       也可直接推到 GitHub Pages。
"""
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(BASE, "index.html")
DATA = os.path.join(BASE, "data", "data.js")

TAG_RE = re.compile(r'\s*<script src="data/data\.js"></script>\s*')

def main():
    with open(INDEX, "r", encoding="utf-8") as f:
        html = f.read()
    with open(DATA, "r", encoding="utf-8") as f:
        data_js = f.read().strip()

    # 校验 data.js 是合法赋值语句（防手误，允许开头有注释块）
    assert "window.PORTFOLIO_DATA =" in data_js, "data.js 必须包含 window.PORTFOLIO_DATA = {...}"

    inline = "\n<script>\n" + data_js + "\n</script>\n"
    new_html, n = TAG_RE.subn(inline, html)
    if n != 1:
        print(f"[错误] 在 index.html 中找到 {n} 处 data.js 引用（应为 1 处），已中止。")
        sys.exit(1)

    with open(INDEX, "w", encoding="utf-8") as f:
        f.write(new_html)

    size_kb = os.path.getsize(INDEX) / 1024
    print(f"[完成] index.html 已更新（数据已内联，{size_kb:.0f} KB，单文件可直接部署）。")
    print("提示：data/data.js 仍是数据源，下次改数据后重新运行本脚本即可。")

if __name__ == "__main__":
    main()
