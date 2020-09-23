$(function() {
    // 모바일 화면에서 햄버거 메뉴 클릭 시 내비게이션이 나타나는 애니메이션
    var wrapperMenu = document.querySelector('.wrapper-menu');

    wrapperMenu.addEventListener('click', function(){
        const style = $('header').hasClass('active');

        if(style == 0) {
            wrapperMenu.classList.add('open');
            $('header').addClass('active');
            $('header h1').addClass('active');
            $('header .search').addClass('active');
            $('nav').animate({left:'0%'}, 1000, 'easeOutCubic').addClass('show');
        } else {
            wrapperMenu.classList.remove('open');
            $('header').removeClass('active');
            $('header h1').removeClass('active');
            $('header .search').removeClass('active');
            $('nav').animate({left:'-100%'}, 1000, 'easeOutCubic').removeClass('show');
        }
    })

    // 검색 아이콘 클릭 시 검색창 보임
    $('.search').on('click', function() {
        $('#search_box').animate({top:0}, 1000, 'easeOutCubic');
    });

    // 검색창 내 X 버튼 클릭 시 검색창 사라짐
    $('#search_box svg').on('click', function() {
        $('#search_box').animate({top:-230}, 1000, 'easeOutCubic')
    });

    // 스크롤 시 숨어 있던 #scroll_btn 보임
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if(scroll >= 100) {
            $('#scroll_btn').stop().animate({bottom: 15}, 500);
        } else {
            $('#scroll_btn').stop().animate({bottom: -45}, 500);
        }
    });

    // #scroll_btn 클릭 시 화면 제일 위로 가기
    $('#scroll_btn').on('click', function() {
        $('html, body').animate({scrollTop:0}, 1000);
   });
});