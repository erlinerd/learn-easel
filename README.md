# Agent 构建之道 · learn-easel

以 [ZJU-REAL/Easel](https://github.com/ZJU-REAL/Easel) 为解剖标本的 agent 构建课程：
前置课 24 课（LLM 基础 L1–L7 + Agent 基础 A1–A17）+ 正课 20 课时（真实源码精读 + 毕业设计），
面向**没有任何 agent 开发经验**的读者——只需任意语言的基础编程。

**在线阅读入口：[`lessons/0000-start-here.html`](lessons/0000-start-here.html)**

## 本地阅读

克隆后直接用浏览器打开 `index.html`（全部为纯静态 HTML，无构建步骤）：

```bash
git clone https://github.com/erlinerd/learn-easel.git
cd learn-easel
open index.html        # 或双击
```

## 结构

```
lessons/      49 个课程页（第 0 课 + 前置课 24 + 正课 20 + 附录 4）
reference/    大纲、术语表、速查表
assets/       共享样式、测验组件、侧边目录
```

## 部署

纯静态站点，Vercel/Netlify/Cloudflare Pages 零配置可直接部署（无构建命令，输出目录 = 根）。

