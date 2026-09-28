// 课程共享测验组件：即时反馈的选择题渲染器
// 用法：Quiz.render("容器id", { q: "题干", opts: ["A...", "B...", "C..."], answer: 0, why: "解析" })
window.Quiz = {
  render: function (elId, cfg) {
    var root = document.getElementById(elId);
    if (!root) return;
    root.classList.add("quiz");
    var q = document.createElement("div");
    q.className = "q";
    q.textContent = cfg.q;
    root.appendChild(q);

    var order = cfg.opts.map(function (_, i) { return i; });
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = order[i]; order[i] = order[j]; order[j] = t;
    }

    var why = document.createElement("div");
    why.className = "why";

    order.forEach(function (idx) {
      var btn = document.createElement("button");
      btn.className = "opt";
      btn.textContent = cfg.opts[idx];
      btn.addEventListener("click", function () {
        Array.prototype.forEach.call(root.querySelectorAll(".opt"), function (b) {
          b.disabled = true;
        });
        root.querySelectorAll(".opt").forEach(function (b) {
          if (b === btn && idx === cfg.answer) { b.classList.add("correct"); }
          else if (b === btn) { b.classList.add("wrong"); }
          else if (cfg.opts.indexOf(b.textContent) === cfg.answer) { b.classList.add("correct"); }
        });
        why.textContent = idx === cfg.answer ? "✓ 对。" + cfg.why : "✗ 再想想。" + cfg.why;
      });
      root.appendChild(btn);
    });
    root.appendChild(why);
  }
};
