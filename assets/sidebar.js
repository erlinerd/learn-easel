// 课程共享组件：侧边目录（所有课程页注入）
// 用法：页面 </body> 前 <script src="../assets/sidebar.js"></script>
(function () {
  if (document.getElementById('course-sidebar')) return;

  var COURSE = [
    { g: '开始', items: [
      ['lessons/0000-start-here.html', '第 0 课 · 开始这里'],
      ['reference/syllabus.html', '总大纲（可勾进度）'],
      ['reference/glossary.html', '术语表'],
    ]},
    { g: '第一部分 · LLM 基础', items: [
      ['lessons/0025-c01-llm.html', 'L1 模型原理'],
      ['lessons/0038-l02-tokens.html', 'L2 Token 与成本'],
      ['lessons/0039-l03-sampling.html', 'L3 采样与参数'],
      ['lessons/0040-l04-messages.html', 'L4 消息协议'],
      ['lessons/0041-l05-capabilities.html', 'L5 能力与边界'],
      ['lessons/0042-l06-prompting.html', 'L6 提示词工程'],
      ['lessons/0026-c02-function-calling.html', 'L7 Function Calling'],
    ]},
    { g: '第二部分 · Agent 基础', items: [
      ['lessons/0027-c03-what-is-agent.html', 'A1 Agent 是什么'],
      ['lessons/0028-c04-tool-mcp-skill.html', 'A2 Tool / MCP / Skill'],
      ['lessons/0030-c06-loop.html', 'A3 循环'],
      ['lessons/0048-tool-design.html', 'A4 工具设计'],
      ['lessons/0032-c08-context-engineering.html', 'A5 上下文工程'],
      ['lessons/0029-c05-memory.html', 'A6 记忆'],
      ['lessons/0033-c09-structured-output.html', 'A7 结构化输出'],
      ['lessons/0034-c10-rag.html', 'A8 RAG 与检索'],
      ['lessons/0035-c11-multi-agent.html', 'A9 多智能体'],
      ['lessons/0031-c07-patterns.html', 'A10 设计模式'],
      ['lessons/0036-c12-evals.html', 'A11 评测与可观测'],
      ['lessons/0037-c13-safety.html', 'A12 安全'],
      ['lessons/0044-a13-resilience.html', 'A13 错误处理与韧性'],
      ['lessons/0043-a12-planning.html', 'A14 规划与长任务'],
      ['lessons/0045-a14-agent-ux.html', 'A15 人机交互与信任'],
      ['lessons/0046-a15-browser.html', 'A16 浏览器自动化'],
      ['lessons/0047-a16-harness.html', 'A17 Harness 选型'],
    ]},
    { g: '正课 · Easel 解剖', items: [
      ['lessons/0002-agent-anatomy.html', '入门 · 六件套蓝图'],
      ['lessons/0005-l01-repo-map.html', 'L01 给仓库画地图'],
      ['lessons/0006-l02-first-message.html', 'L02 第一条消息'],
      ['lessons/0007-l03-agents-md.html', 'L03 AGENTS.md'],
      ['lessons/0008-l04-soul-stack.html', 'L04 SOUL 与四层栈'],
      ['lessons/0009-l05-persona-injection.html', 'L05 画像注入'],
      ['lessons/0010-l06-skill-spec.html', 'L06 SKILL-SPEC'],
      ['lessons/0011-l07-shell-vs-script.html', 'L07 薄壳与厚脚本'],
      ['lessons/0012-l08-skill-sync.html', 'L08 技能同步'],
      ['lessons/0013-l09-web-overview.html', 'L09 后端鸟瞰'],
      ['lessons/0014-l10-streaming.html', 'L10 流式链路'],
      ['lessons/0015-l11-session-engineering.html', 'L11 会话工程'],
      ['lessons/0016-l12-publish-engine.html', 'L12 发布引擎'],
      ['lessons/0017-l13-xhs-publish.html', 'L13 xhs 精读'],
      ['lessons/0018-l14-guards.html', 'L14 闸门与对账'],
      ['lessons/0019-l15-human-pace.html', 'L15 拟人化风控'],
      ['lessons/0020-l16-loop-reading.html', 'L16 loop 精读'],
      ['lessons/0021-l17-tool-execution.html', 'L17 工具执行'],
      ['lessons/0022-l18-compaction.html', 'L18 compaction'],
      ['lessons/0023-l19-blueprint.html', 'L19 毕业蓝图'],
      ['lessons/0024-l20-capstone.html', 'L20 实现与复盘'],
    ]},
    { g: '工具与附录', items: [
      ['reference/agent-anatomy.html', '六件套速查'],
      ['reference/agent-loop-cheatsheet.html', 'loop 解剖速查'],
      ['reference/agent-deployment-taxonomy.html', '部署形态速查'],
      ['reference/reading-roadmap.html', '源码阅读路线'],
      ['lessons/0004-reading-path.html', '精读方法课'],
      ['lessons/0001-local-vs-cloud-agent.html', '部署形态课'],
    ]},
  ];

  var css = [
    '#course-sidebar{position:fixed;top:0;left:0;bottom:0;width:264px;overflow-y:auto;',
    'background:#faf7f2;border-right:1px solid #e5ded4;padding:14px 12px 40px;',
    'font-family:-apple-system,'+JSON.stringify('PingFang SC')+',sans-serif;font-size:0.8rem;line-height:1.5;',
    'transform:translateX(-102%);transition:transform .18s ease;z-index:50;}',
    'html.sb-open #course-sidebar{transform:none;box-shadow:6px 0 18px rgba(0,0,0,.06);}',
    '#course-sidebar .sb-title{font-weight:700;font-size:0.86rem;color:#1a1a1a;margin:2px 4px 10px;}',
    '#course-sidebar .sb-title a{color:#F05A3C;text-decoration:none;}',
    '#course-sidebar .sb-g{font-size:0.68rem;letter-spacing:.08em;color:#8a8378;',
    'text-transform:uppercase;margin:12px 4px 4px;}',
    '#course-sidebar a.sb-i{display:block;padding:3px 8px;border-radius:6px;color:#3a3a3a;',
    'text-decoration:none;border-left:3px solid transparent;}',
    '#course-sidebar a.sb-i:hover{background:#fff3ec;color:#F05A3C;}',
    '#course-sidebar a.sb-i.cur{color:#F05A3C;font-weight:700;background:#fff6f2;border-left-color:#F05A3C;}',
    '#course-sidebar a.sb-i.seen:not(.cur){color:#8a8378;}',
    '#sb-toggle{position:fixed;top:10px;left:10px;z-index:60;width:34px;height:34px;',
    'border:1px solid #e5ded4;border-radius:8px;background:#fffdf9;color:#F05A3C;',
    'font-size:1rem;cursor:pointer;line-height:1;}',
    '#sb-toggle:hover{border-color:#F05A3C;}',
    'html.sb-open #sb-toggle{left:278px;}',
    '@media print{#course-sidebar,#sb-toggle{display:none!important}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.id = 'sb-toggle';
  btn.title = '目录（快捷键 s）';
  btn.textContent = '☰';
  document.body.appendChild(btn);

  var nav = document.createElement('nav');
  nav.id = 'course-sidebar';
  var html = '<div class="sb-title"><a href="../lessons/0000-start-here.html">Agent 构建之道</a></div>';
  var cur = location.pathname.split('/').pop();
  var seen = [];
  try { seen = JSON.parse(localStorage.getItem('sb-seen') || '[]'); } catch (e) {}
  if (cur && seen.indexOf(cur) === -1) { seen.push(cur); try { localStorage.setItem('sb-seen', JSON.stringify(seen)); } catch (e) {} }

  COURSE.forEach(function (sec) {
    html += '<div class="sb-g">' + sec.g + '</div>';
    sec.items.forEach(function (it) {
      var file = it[0].split('/').pop();
      var cls = 'sb-i' + (file === cur ? ' cur' : (seen.indexOf(file) !== -1 ? ' seen' : ''));
      html += '<a class="' + cls + '" href="../' + it[0] + '">' + it[1] + '</a>';
    });
  });
  nav.innerHTML = html;
  document.body.appendChild(nav);

  function setOpen(open) {
    document.documentElement.classList.toggle('sb-open', open);
    try { localStorage.setItem('sb-open', open ? '1' : '0'); } catch (e) {}
  }
  var wantOpen = false;
  try { wantOpen = localStorage.getItem('sb-open') === '1'; } catch (e) {}
  if (localStorage.getItem('sb-open') === null && window.innerWidth >= 1280) wantOpen = true;
  setOpen(wantOpen);
  btn.addEventListener('click', function () {
    setOpen(!document.documentElement.classList.contains('sb-open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 's' && !e.metaKey && !e.ctrlKey && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      setOpen(!document.documentElement.classList.contains('sb-open'));
    }
  });
})();
