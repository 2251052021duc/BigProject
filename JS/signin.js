let btnSubmit = document.querySelector('.submit');
let errorMessage = document.getElementById('error-message');
btnSubmit.addEventListener('click', (e) => {
  //tránh việc trình duyệt tải lại trang khi nút gửi được nhấp.
  e.preventDefault();
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
//lấy dữ liệu trong localstorage
  var userLocal = localStorage.getItem("user");
  var passLocal = localStorage.getItem("passwords");
  if (user === userLocal && pass === passLocal) {
    window.location.href = "../HTML/index-person.html";
  } else {
    errorMessage.textContent = "Thông tin đăng nhập không đúng.";
  }
});
function changeTypePassword() {
  let password = document.getElementById('password');
  let eyeIcon = document.querySelector('.fa-regular');
  
  if (password.type === 'text') {
      password.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
  } else {
      password.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
  }
}

