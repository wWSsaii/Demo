/* ============================================================
 * 王思羽 · 个人产品展示 Demo —— 数据源文件
 * 所有内容均以简历《王思羽-AI 产品助理-立即到岗实习6+个月》为准
 * 修改此文件后，运行 `python scripts/build.py` 重新生成单文件 index.html
 * ============================================================ */
window.PORTFOLIO_DATA = {
  "meta": {
    "name": "王思羽",
    "role": "AI 产品助理",
    "roleEn": "AI Product Assistant",
    "roleTag": "AI 应用方向 · 产品运营",
    "tagline": "以「AI 工作流落地 + 产品 0→1 搭建 + 数据驱动运营」复合能力，独立完成痛点洞察 → 需求拆解 → AI 方案设计 → 上线迭代全流程。",
    "avatar": "data/web/avatar.webp",
    "status": "立即到岗 · 可全职实习 6 个月+",
    "statusType": "available",
    "phone": "17786939495",
    "email": "2788191560@qq.com",
    "age": "22岁",
    "github": "https://github.com/wWSsaii",
    "githubText": "github.com/wWSsaii",
    "navLinks": [
      { "id": "about", "label": "关于我" },
      { "id": "impact", "label": "数据成果" },
      { "id": "projects", "label": "项目经历" },
      { "id": "method", "label": "工作方法" },
      { "id": "contact", "label": "联系我" }
    ]
  },

  "education": {
    "school": "海南师范大学",
    "major": "数据科学与大数据技术",
    "degree": "本科 · 2027 届",
    "period": "2023.09 – 2027.06",
    "courses": ["机器学习", "自然语言处理（NLP）", "数据可视化", "Python", "SQL"]
  },

  "summary": "具备「AI 工作流落地 + 产品 0→1 搭建 + 数据驱动运营」复合能力，可独立完成痛点洞察→需求拆解→AI 方案设计→上线迭代全流程。熟练运用 Coze、Prompt 工程、多智能体协作、知识库搭建，落地可量化 AI 提效成果（11 节点自动化工作流、120 份知识文档、30 万+ 播放内容分析）。拥有用户增长与商业化实战经验，沉淀 500+ 注册用户、40 万+ 内容播放、10+ 商家合作，擅长内容获客 + 私域沉淀赋能产品迭代。",

  "capabilities": [
    {
      "icon": "workflow",
      "title": "AI 工作流落地",
      "desc": "熟练运用 Coze、Prompt 工程、多智能体协作与知识库搭建，落地 11 节点自动化工作流、120 份知识文档等可量化提效成果，形成「开源参考 → 多 Agent 协同 → 人工校验 → 平台部署」标准化 SOP。"
    },
    {
      "icon": "product",
      "title": "产品 0→1 搭建",
      "desc": "独立主导校园综合服务小程序从痛点洞察、三层业务结构设计到上线迭代全链路，沉淀 500+ 注册用户、60+ 接单员，跑通「内容获客 → 社群留存 → 平台交易」增长闭环。"
    },
    {
      "icon": "data",
      "title": "数据驱动运营",
      "desc": "40 万+ 内容播放的后台复盘归因，17 项标准字段入库支撑选题决策；短视频引流 + 私域社群沉淀，赋能产品迭代与商业化合作（10+ 商家资源置换）。"
    }
  ],

  "stats": [
    { "value": 500, "suffix": "+", "label": "注册用户", "note": "i跑校园小程序" },
    { "value": 40, "suffix": "万+", "label": "内容播放", "note": "短视频全平台" },
    { "value": 11, "suffix": "节点", "label": "自动化工作流", "note": "Coze 全链路" },
    { "value": 120, "suffix": "份", "label": "知识文档", "note": "海小智知识库" },
    { "value": 10, "suffix": "+", "label": "商家合作", "note": "流量互推·资源置换" },
    { "value": 3000, "suffix": "元", "label": "平台交易额", "note": "校园服务变现" }
  ],

  "projects": [
    {
      "id": "haixiaozhi",
      "name": "海小智",
      "subtitle": "新生入学导航 AI 问答智能体",
      "role": "创建者 · 需求分析/知识库运营/部署跟进",
      "period": "2026.07",
      "tags": ["AI 智能体", "Coze", "知识库构建", "Prompt 工程"],
      "summary": "新生入学面临大量重复咨询（宿舍/食堂/教务等），人工解答效率低。设计 10 大类分层知识库架构，打造可对话、可导航的入学助手。",
      "highlights": [
        { "title": "知识库运营", "text": "借助元宝对接微信生态 + IMA Claw 采集，多智能体协作批量生产分类知识文档，统一 Prompt 约束输出规范，沉淀「开源参考 → 多 Agent 协同 → 人工校验 → 平台部署」标准化 SOP；累计生成 120 份分类 Markdown 文档，沉淀 75 条结构化 Q&A。" },
        { "title": "体验优化", "text": "洞察新生入学迷路痛点，用 Python 脚本生成可视化互动地图并部署至 GitHub Pages，接入问答平台，解决纯文本问答无法承载的导航需求。" }
      ],
      "metrics": [
        { "v": "120", "suffix": "份", "l": "分类知识文档" },
        { "v": "75", "suffix": "条", "l": "结构化 Q&A" },
        { "v": "10", "suffix": "类", "l": "分层知识架构" }
      ],
      "media": {
        "type": "webp",
        "src": "data/web/haixiaozhi-demo.webp",
        "poster": "data/web/haixiaozhi-poster.webp",
        "alt": "海小智 AI 问答智能体演示"
      },
      "extras": [
        {
          "type": "img",
          "src": "data/web/chatgpt.webp",
          "caption": "多轮 Prompt 迭代产出海小智 IP 海报"
        }
      ],
      "links": [
        { "text": "校园互动地图 Demo", "url": "https://wwssaii.github.io/hainnu-map/", "external": true }
      ]
    },
    {
      "id": "ipao",
      "name": "i跑校园",
      "subtitle": "校园综合服务小程序",
      "role": "创始人 · 产品规划/用户运营/商务合作",
      "period": "2024.10 – 2025.09",
      "tags": ["0→1 产品", "用户增长", "私域运营", "商务合作"],
      "summary": "0→1 主导搭建校园综合服务小程序，统筹产品规划、需求迭代、营销推广、用户运营、商务合作全链路。",
      "highlights": [
        { "title": "三层业务结构", "text": "按「高频刚需打底、低频高毛利增收」设计——基础流量层（快递代取/论坛交流）、增值服务层（技能墙：宿舍美甲/王者陪练/网课服务）、电商变现层（零食团购/流量卡），构建丰富校园服务生态。" },
        { "title": "增长运营", "text": "短视频引流至私域社群获取种子用户，对接 10+ 校园周边商家达成流量互推与资源置换合作，跑通「内容获客 → 社群留存 → 平台交易」增长闭环。" },
        { "title": "技术破局", "text": "探索外链 API 绕开原生限制实现跨小程序跳转；配置飞书 Webhook 机器人实现订单实时推送。" }
      ],
      "metrics": [
        { "v": "500", "suffix": "+", "l": "注册用户" },
        { "v": "60", "suffix": "+", "l": "接单员" },
        { "v": "3000", "suffix": "元+", "l": "总交易额" }
      ],
      "media": {
        "type": "carousel",
        "images": [
          { "src": "data/web/campus-05.webp", "alt": "小程序首页 · 校园服务总览" },
          { "src": "data/web/campus-04.webp", "alt": "任务大厅 · 快递代取" },
          { "src": "data/web/campus-03.webp", "alt": "零食团购 · 电商变现层" },
          { "src": "data/web/campus-01.webp", "alt": "流量卡办理 · 电商变现层" },
          { "src": "data/web/campus-07.webp", "alt": "游戏陪练 · 技能墙" },
          { "src": "data/web/campus-06.webp", "alt": "宿舍美甲预约 · 技能墙" }
        ]
      }
    },
    {
      "id": "coze",
      "name": "Coze 短视频分析自动化工作流",
      "subtitle": "竞品素材 → 结构化数据，一条链路自动化",
      "role": "工作流开发者 · 编排/Prompt/数据标准化",
      "period": "2026.07",
      "tags": ["Coze", "Prompt 工程", "流程自动化", "飞书多维表格"],
      "summary": "解决竞品素材人工整理效率低的痛点，打通「视频采集 → ASR 语音转写 → 爆款分析 → 飞书多维表格入库」全链路。",
      "highlights": [
        { "title": "流程自动化", "text": "搭建 11 节点 Coze 工作流，打通视频采集、ASR 语音转写、爆款分析、飞书多维表格入库全链路，替代人工整理竞品素材。" },
        { "title": "Prompt 工程与标准化", "text": "设计前置过滤规则（大模型识别无效视频）降低算力消耗；2 套 Prompt 框架（黄金 3 秒文案改写、爆款多维拆解），输出 17 项标准字段，入库数据直接支撑运营分析与选题决策。" },
        { "title": "效果跟进", "text": "量化节点耗时（ASR≈22s / 改写≈35s / 分析≈31s）与系统性排错方法论，保障流程稳定运行。" }
      ],
      "metrics": [
        { "v": "11", "suffix": "节点", "l": "全自动链路" },
        { "v": "2", "suffix": "套", "l": "Prompt 框架" },
        { "v": "17", "suffix": "项", "l": "标准字段" }
      ],
      "media": {
        "type": "webp",
        "src": "data/web/workflow-demo.webp",
        "poster": "data/web/workflow-poster.webp",
        "alt": "Coze 短视频分析工作流演示"
      }
    },
    {
      "id": "video",
      "name": "校园类个人 IP 短视频矩阵",
      "subtitle": "内容策划 · 数据分析 · 竞品对标",
      "role": "独立创作者 · 内容策划/数据分析/竞品对标",
      "period": "2024.08 – 至今",
      "tags": ["内容策划", "数据分析", "竞品对标", "私域引流"],
      "summary": "全平台 40 万+ 播放、产出 30+ 篇内容；依托后台数据复盘内容表现，归因优化选题，持续沉淀可复用的内容框架。",
      "highlights": [
        { "title": "数据复盘", "text": "依托平台后台数据复盘内容表现，归因优化选题方向。" },
        { "title": "竞品对标", "text": "跟踪对标竞品，拆解爆款规律沉淀复用内容框架。" },
        { "title": "流量转化", "text": "引导公域流量沉淀至私域社群，支撑后续转化与产品导流。" }
      ],
      "metrics": [
        { "v": "40", "suffix": "万+", "l": "全平台播放" },
        { "v": "30", "suffix": "+", "l": "内容产出" },
        { "v": "2024.08", "suffix": "", "l": "持续至今" }
      ],
      "media": {
        "type": "video",
        "src": "data/校园宣传.mp4",
        "title": "校园宣传片（实拍）",
        "notice": "视频约 37MB，点击后播放"
      }
    },
    {
      "id": "card",
      "name": "校园卡销售 · 团队负责人",
      "subtitle": "私域精准获客 + 转化话术 SOP",
      "role": "团队负责人 · 组建/培训/转化",
      "period": "2024.09",
      "tags": ["私域获客", "团队管理", "转化 SOP"],
      "summary": "短视频引流至私域精准获客，单日个人成交 10 单（排名第一）；组建管理 20+ 人团队，沉淀 10+ 条转化话术 SOP 并培训推广。",
      "highlights": [
        { "title": "个人战绩", "text": "单日个人成交 10 单，团队内排名第一。" },
        { "title": "团队管理", "text": "组建并管理 20+ 人团队，沉淀 10+ 条转化话术 SOP，统一培训推广。" }
      ],
      "metrics": [
        { "v": "10", "suffix": "单/日", "l": "个人成交" },
        { "v": "20", "suffix": "+", "l": "团队成员" },
        { "v": "10", "suffix": "+", "l": "话术 SOP" }
      ]
    }
  ],

  "method": {
    "title": "我的 AI 产品工作方法",
    "steps": [
      { "t": "多模型定方案", "d": "同一需求用多个模型出方案，交叉对比选最优路径，避免单模型盲区。" },
      { "t": "需求清单", "d": "把业务目标拆成可执行的需求清单，明确输入输出与验收标准。" },
      { "t": "AI 初稿", "d": "Prompt 约束输出规范，AI 批量生成初稿，人工只做评审而非从零撰写。" },
      { "t": "评审迭代", "d": "人工校验质量、修正偏差，多轮迭代直至达标，沉淀可复用模板。" },
      { "t": "本地 Agent 落地", "d": "计划模式拆解任务，Agent 逐步执行落地，把 SOP 变成自动化。" }
    ]
  },

  "skills": [
    {
      "group": "AI 产品能力",
      "items": ["0→1 产品落地", "AI 产品落地 SOP", "Prompt 工程", "需求拆解", "竞品对标分析", "多模型定方案"]
    },
    {
      "group": "工具与自动化",
      "items": ["Coze 工作流编排", "飞书多维表格", "WorkBuddy + 飞书 CLI", "知识库构建", "流程自动化", "Python（Pandas/Numpy）"]
    },
    {
      "group": "运营与数据",
      "items": ["运营数据分析", "内容获客", "私域运营", "用户增长", "数据驱动迭代", "转化话术 SOP"]
    }
  ],

  "contact": {
    "title": "期待与你一起做有数据、有落地、有增长的产品",
    "items": [
      { "type": "phone", "label": "电话 / 微信", "value": "17786939495", "href": "tel:17786939495" },
      { "type": "email", "label": "邮箱", "value": "2788191560@qq.com", "href": "mailto:2788191560@qq.com" },
      { "type": "github", "label": "GitHub", "value": "github.com/wWSsaii", "href": "https://github.com/wWSsaii", "external": true }
    ],
    "note": "可全职实习 6 个月+ · 立即到岗 · 坐标海南"
  }
};
