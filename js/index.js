$(function () {
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

    // 배너 자동 슬라이드
    let swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,
            disableOnInteraction:false
        },
        loop: true,
        speed: 2000
    });

    // 스크롤 시 #PC_header 애니메이션
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 100) {
            $('.container #PC_header').addClass('up');
            $('.container #search_box').addClass('act');
        } else {
            $('.container #PC_header').removeClass('up');
            $('.container #search_box').removeClass('act');
        }
    });

    // 스크롤 시 숨어 있던 #scroll_btn 보임
    $(window).scroll(function () {
        var scrollT = $(this).scrollTop();
        if (scrollT >= 100) {
            $('#scroll_btn').stop().animate({
                bottom: 25
            }, 500);
        } else {
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

    // 배너 부분 scroll 이미지 클릭하면 다음 화면으로 부드럽게 넘어감
    $('#banner img').on('click', function () {
        var ht = $(window).height();

        $('html, body').stop().animate({
            scrollTop: ht
        }, 700, 'easeOutCirc');
    });

    // PC를 제외한 디바이스에서만 best seller 부분 swiper 플러그인
    if (wd > 0 && wd < 1440) {
        $('#best_seller').addClass('BS-container');
        $('#best_seller .products').addClass('swiper-wrapper');
        $('#best_seller .product1').addClass('swiper-slide');
        $('#best_seller .product2').addClass('swiper-slide');
        $('#best_seller .product3').addClass('swiper-slide');
    } else {
        $('#best_seller').removeClass('BS-container');
        $('#best_seller .products').removeClass('swiper-wrapper');
        $('#best_seller .product1').removeClass('swiper-slide');
        $('#best_seller .product2').removeClass('swiper-slide');
        $('#best_seller .product3').removeClass('swiper-slide');
    }

    var BSswiper = new Swiper('.BS-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // PC 화면에서 best seller 이미지 영역 호버 시 상품 상세 페이지로 이동 나타내는 아이콘 나타남
    $('#best_seller .products > div').hover(function () {
        $(this).addClass('link');
    }, function () {
        $(this).removeClass('link');
    })

    // PC를 제외한 디바이스에서만 new arrivals 부분 swiper 플러그인
    if (wd > 0 && wd < 1440) {
        $('#new_arrivals').addClass('NA-container');
        $('#new_arrivals .products').addClass('swiper-wrapper');
        $('#new_arrivals .product1').addClass('swiper-slide');
        $('#new_arrivals .product2').addClass('swiper-slide');
        $('#new_arrivals .product3').addClass('swiper-slide');
    } else {
        $('#new_arrivals').removeClass('NA-container');
        $('#new_arrivals .products').removeClass('swiper-wrapper');
        $('#new_arrivals .product1').removeClass('swiper-slide');
        $('#new_arrivals .product2').removeClass('swiper-slide');
        $('#new_arrivals .product3').removeClass('swiper-slide');
    }

    var NAswiper = new Swiper('.NA-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // PC 화면에서 new arrivals 이미지 영역 호버 시 상품 상세 페이지로 이동 나타내는 아이콘 나타남
    $('#new_arrivals .products > div').hover(function () {
        $(this).addClass('link');
    }, function () {
        $(this).removeClass('link');
    })
});