const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = form.querySelector("input[type='text']").value.trim();
    const password = form.querySelector("input[type='password']").value;

    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }
    alert("Đăng nhập thành công!");
    form.reset();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      window.location.href = "index.html";
    });
  });