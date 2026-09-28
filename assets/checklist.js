// 课程共享组件：勾选进度持久化
// 用法：<input type="checkbox" data-key="p1-1"> ，页面底部调 Checklist.init("reading-roadmap")
window.Checklist = {
  init: function (storageKeyPrefix) {
    document.querySelectorAll('input[type="checkbox"][data-key]').forEach(function (cb) {
      var key = storageKeyPrefix + ":" + cb.dataset.key;
      try { cb.checked = localStorage.getItem(key) === "1"; } catch (e) {}
      cb.addEventListener("change", function () {
        try { localStorage.setItem(key, cb.checked ? "1" : "0"); } catch (e) {}
        document.dispatchEvent(new CustomEvent("checklist:change"));
      });
    });
  }
};
