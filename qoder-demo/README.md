# 王思羽 · AI 产品助理 个人作品集（单文件版）

浅色简洁 + 品牌蓝风格的个人产品展示 Demo。数据驱动渲染、响应式布局、含滚动动画 / 悬停效果 / 平滑过渡 / 手机截图轮播 / 动图灯箱，纯原生 HTML/CSS/JS，无任何外部依赖，双击 `index.html` 即可在浏览器运行。

在线地址：`https://wwssaii.github.io/Demo/qoder-demo/`（部署在 GitHub Pages）

## 目录结构

```
qoder-demo/
├── index.html          # 最终单文件版（数据已内联，可直接部署）
├── data/
│   ├── data.js         # 数据源（编辑简历/项目数据改这里）
│   ├── web/            # 优化后的 WebP 素材（动图演示、截图、头像）
│   └── 校园宣传.mp4     # 项目视频（点击播放，按需加载）
└── scripts/
    └── build.py        # 把 data/data.js 内联进 index.html
```

## 数据如何维护

1. 编辑 `data/data.js`（所有文案、数据、项目、技能、联系方式都在里面，数字均以简历为准）
2. 运行 `python scripts/build.py` 重新生成单文件 `index.html`
3. 提交推送，GitHub Pages 自动更新

## 页面区块

Hero（头像 + 状态徽章 + 浮动数据标签）→ 数据成果（数字滚动动画）→ 关于我（能力卡片 + 技能标签）→ 项目经历（海小智 AI 智能体动图演示 / i跑校园手机截图轮播 / Coze 工作流动图 / 短视频矩阵视频 / 校园卡销售）→ 工作方法（5 步方法论链条）→ 联系我（渐变面板 + 联系方式卡片）

## 素材优化说明

原始 GIF/截图在仓库根目录 `data/` 中保留不动；`data/web/` 内为优化产物：

- `工作流.gif`（6MB, 725帧）→ `workflow-demo.webp`（3.1MB）
- `海小智.gif`（15MB, 730帧）→ `haixiaozhi-demo.webp`（4.5MB）
- 截图 / 头像 → 压缩 WebP（单张 10-80KB）

重新生成优化素材：`python scripts/optimize_media.py`（脚本在仓库根目录 `scripts/`）。
