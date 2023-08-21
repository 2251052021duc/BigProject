$(document).ready(function(){
  var isNavVisible = false; // Ban đầu đang ẩn
  $('header').addClass('slider-head');//add class để cho nó chạy slider trước
  // Xử lý bấm vào nút toggle
  $('#toggle').click(function(){
    isNavVisible = !isNavVisible; // Đảo ngược trạng thái
    if (isNavVisible) {
      $('.nav > ul > li').slideToggle(); // Hiển thị hoặc ẩn 
      $('header').removeClass('slider-head');
      $('header').addClass('header');
    } else {
      $('header').removeClass('header');
      $('header').addClass('slider-head');
      $('.nav > ul > li').slideToggle(); // Hiển thị hoặc ẩn 
    }
  });
  $(window).resize(function(){
    if ($(window).width() > 700) {
      if (isNavVisible) {
        $('.nav > ul > li').css('display', 'block');
      }
    } else {
      $('.nav > ul > li').css('display', '');
    }
  });
  // Kích hoạt sự kiện resize ban đầu để xác định trạng thái ban đầu
  $(window).resize();
});
//lấy tham chiếu các phần tử
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');
  let lengthItems = items.length - 1;
  let active = 0;
// Bắt sự kiên next and prev
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
//cập nhât lại ảnh và nút bấm  
//dot:Đại diện cho điểm dots đã nhấn                         
dots.forEach((li, dot) => {
  li.addEventListener('click', ()=>{
       active = dot;
       reloadSlider();
  })
})
// Tự động trượt slider mỗi 3 giây:
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';//di chuyển sang trái để hiển thị hình ảnh tiếp theo
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshInterval);//xóa slider tự động trượt trước đó
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}     
//khi thay đổi kích thước nó sẽ tự động phù hợp 
  window.onresize = function(event) {
      reloadSlider();
  };
let back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      back_to_top.classList.add('show');
    } else {
      back_to_top.classList.remove('show');
    }
  });
  //cuộn trang đi lên
document.querySelector('.back_to_top').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
// tự động cuộn trang đi xuống
document.getElementById('address').addEventListener('click', function () {
    window.scrollTo({
        top: 80000,
        behavior: 'smooth'
    });
  }); 
function nonePerson(){
  confirm("Vui lòng đăng nhập tài khoản và mật khẩu")
}