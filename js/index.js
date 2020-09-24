$(function() {
    // a href="#" 기본 성격 제거
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });

    // 배너 자동 슬라이드
    let swiper = new Swiper('.swiper-container', {
        autoplay: { delay:6000 }, // 자동 슬라이드
        loop: true
    });

    // 배너 클릭 후에도 계속 애니메이션 실행
    $('.swiper-container').on('click', function() {
        swiper.autoplay.start();
    });
    $('.swiper-wrapper').on('click', function() {
        swiper.autoplay.start();
    });
    $('.swiper-slide').on('click', function() {
        swiper.autoplay.start();
    });

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

    // 검색 아이콘 클릭 시 검색창 보임 (모바일, 태블릿)
    $('.search').on('click', function() {
        $('#search_box').animate({top:0}, 1000, 'easeOutCubic');
    });

    // 검색창 내 X 버튼 클릭 시 검색창 사라짐
    $('#search_box svg').on('click', function() {
        $('#search_box').animate({top:-230}, 1000, 'easeOutCubic')
    });

    // 스크롤 시 #PC_header 애니메이션
    $(window).on('scroll', function() {
        var scroll = $(this).scrollTop();
        if(scroll >= 100) {
            $('.container #PC_header').addClass('up');
        } else {
            $('.container #PC_header').removeClass('up');
        }
    });

    // 스크롤 시 숨어 있던 #scroll_btn 보임
    $(window).scroll(function() {
        var scrollT = $(this).scrollTop();
        if(scrollT >= 100) {
            $('#scroll_btn').stop().animate({bottom: 25}, 500);
        } else {
            $('#scroll_btn').stop().animate({bottom: -100}, 500);
        }
    });

    // #scroll_btn 클릭 시 화면 제일 위로 가기
    $('#scroll_btn').on('click', function() {
        $('html, body').animate({scrollTop:0}, 1000);
   });

   // 모바일, 태블릿 화면에서만 swiper 생성
   var wt = $(window).width();
   if(wt <= 1439) {
        $('#best_seller').addClass('swiper-container');
        $('#best_seller .products').addClass('swiper-wrapper');
        $('#best_seller .product1').addClass('swiper-slide');
        $('#best_seller .product2').addClass('swiper-slide');
        $('#best_seller .product3').addClass('swiper-slide');
        let swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
   } else {
        $('#best_seller').removeClass('swiper-container');
        $('#best_seller .products').removeClass('swiper-wrapper');
        $('#best_seller .product1').removeClass('swiper-slide');
        $('#best_seller .product2').removeClass('swiper-slide');
        $('#best_seller .product3').removeClass('swiper-slide');
   }

    // PC 화면에서 best seller 이미지 영역 호버 시 상품 상세 페이지로 이동 나타내는 아이콘 나타남
    $('#best_seller .products > div').hover(function() {
            $(this).addClass('link');
    }, function() {
            $(this).removeClass('link');
    })

    // new arrivals 이미지 영역 호버 시 상품 상세 페이지로 이동 나타내는 아이콘 나타남
    $('#new_arrivals .products > div').hover(function() {
        $(this).addClass('link');
}, function() {
        $(this).removeClass('link');
})
});