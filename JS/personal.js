
$(document).ready(function(){
    $('#menu').click(function(){
        //ẩn hoặc hiện dấu x và thêm class cho header
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        //cài đặt lại trạng thái ban đầu
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop()>0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    });
    //smooth scrolling 
    $('a[href*="#"]').click(function(e){
        e.preventDefault();
        //cuộn trang mượt
        // vị trí cuộn của trang web đến một điểm cụ thể 
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500, 'linear' );
    });
});
function loadPersonpage() {
    fetch("../data/person-page.json")
    .then(res=>res.json())
    .then(data=>{
        let h="";
        for(let c of data){
            h+= 
            `<div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>${c.date}</span>
                <h3>${c.cv}</h3>
                <p>${c.feedback}</p>
            </div>`
        }
        let e = document.querySelector("#loadPersonPage"); // Change :first-child
        e.insertAdjacentHTML("beforeend", h);
    })
}
window.onload = () => {
    loadPersonpage();
};
