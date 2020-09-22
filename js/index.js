$(function() {
    // 모바일 화면에서 햄버거 메뉴 클릭 시 내비게이션이 나타나는 애니메이션
    var wrapperMenu = document.querySelector('.wrapper-menu');

    wrapperMenu.addEventListener('click', function(){
        wrapperMenu.classList.toggle('open');
        $('nav').animate({left:'0%'}, 500).toggleClass('show');
    })
});