$(function() {
    // a href="#" 기본 성격 제거
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    // 스크롤 시 모바일 헤더 애니메이션
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 400) {
            $('.container header').addClass('up');
        } else {
            $('.container header').removeClass('up');
        }
    });

    // 모바일 화면에서 햄버거 메뉴 클릭 시 내비게이션이 나타나는 애니메이션
    var wrapperMenu = document.querySelector('.wrapper-menu');

    wrapperMenu.addEventListener('click', function () {
        const style = $('header').hasClass('active');

        if (style == 0) {
            wrapperMenu.classList.add('open');
            $('header').addClass('active');
            $('header h1').addClass('active');
            $('header .search').addClass('active');
            $('nav').animate({ left: '0%' }, 1000, 'easeOutCubic').addClass('show');
            $('html').css('overflow', 'hidden');
        } else {
            wrapperMenu.classList.remove('open');
            $('nav').animate({ left: '-100%' }, 1000, 'easeOutCubic').removeClass('show');
            $('header').removeClass('active');
            $('header h1').removeClass('active');
            $('header .search').removeClass('active');
            $('html').css('overflow', 'initial');
        }
    })

    var wd = $(window).width();
    if(wd > 0 && wd < 1440) { // 모바일, 태블릿 화면에서 검색 아이콘 클릭 시 검색창 보임
        $('.search').on('click', function () {
            $('#search_box').stop().animate({
                top: 0
            }, 1000, 'easeOutCubic');
        });
    } else { // PC 화면에서 검색 아이콘 클릭 시 검색창 보임
        $('#PC_header .menu2 a').on('click', function() {
            $('.container #search_box').stop().animate({height: 180}, 500);
        });
    }
    
    // 검색창 내 X 버튼 클릭 시 검색창 사라짐
    $('#search_box svg').on('click', function () {    
        if(wd > 0 && wd < 1400) {
            $('#search_box').animate({
                top: -230
            }, 1000, 'easeOutCubic');
        } else {
            $('.container #search_box').stop().animate({height: 0}, 500);
        }
    });

    // 스크롤 시 #PC_header 애니메이션, 숨어 있던 #scroll_btn 보임
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 100) {
            $('.container #PC_header').addClass('up');
            $('.container #search_box').addClass('act');
            $('#scroll_btn').stop().animate({
                bottom: 25
            }, 500);
        } else {
            $('.container #PC_header').removeClass('up');
            $('.container #search_box').removeClass('act');
            $('#scroll_btn').stop().animate({
                bottom: -100
            }, 500);
        }
    });

    // #scroll_btn 클릭 시 화면 제일 위로 가기
    $('#scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // PC 화면에서 내비게이션 카테고리 중 제품에 마우스 호버 시 숨겨진 소메뉴 나타남
    $('#PC_header .menu1 li ul').hide();
    $('#PC_header .menu1 > li').eq(0).hover(function () {
        $('#PC_header .menu1 li ul').stop().slideDown();
    }, function () {
        $('#PC_header .menu1 li ul').stop().slideUp();
    });

    // PC 화면에서 제품 카테고리 클릭 시 애니메이션
    $('.PC_select li').on('click', function() {
        $('.PC_select li').removeClass('click');
        $(this).addClass('click');
    });
    
    // PC 화면에서 전체 클릭 시 모든 제품 보임
    $('.PC_select li').eq(0).on('click', function() {
        $('.products a').css('display', 'block');
    });

    // PC 화면에서 스킨 케어 클릭 시 스킨 케어 제품만 보임
    $('.PC_select li').eq(1).on('click', function() {
        $('.skin').css('display', 'block');
        $('.hair').css('display', 'none');
        $('.makeup').css('display', 'none');
    });

    // PC 화면에서 헤어 케어 클릭 시 헤어 케어 제품만 보임
    $('.PC_select li').eq(2).on('click', function() {
        $('.skin').css('display', 'none');
        $('.hair').css('display', 'block');
        $('.makeup').css('display', 'none');
    });
    
    // PC 화면에서 메이크업 클릭 시 헤어 케어 제품만 보임
    $('.PC_select li').eq(3).on('click', function() {
        $('.skin').css('display', 'none');
        $('.hair').css('display', 'none');
        $('.makeup').css('display', 'block');
    });

    // PC 화면에서 상품 목록 이미지 호버 시 장바구니 아이콘 나타남
    if(wd >= 1440) {
        $('.products .img').hover(function() {
            $(this).children('.products .cart').stop().animate({bottom: 20}, 400, 'easeOutCubic');
        }, function() {
            $(this).children('.products .cart').stop().animate({bottom: -100}, 400, 'easeOutCubic');
        });
    }

    // 장바구니 아이콘 클릭 시 '장바구니에 추가되었습니다.' 알림창 송출 후 페이지 새로 고침
    $('.products .cart').on('click', function(e) {
        alert('장바구니에 추가되었습니다.');
        e.preventDefault();
    });

    // 페이지 클릭 애니메이션
    $('.page li').on('click', function() {
        $(this).siblings('li').removeClass('click');
        $(this).addClass('click');
    });
});