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
    if(wd > 0 && wd < 1280) { // 모바일, 태블릿 화면에서 검색 아이콘 클릭 시 검색창 보임
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
        if(wd > 0 && wd < 1280) {
            $('#search_box').animate({
                top: -230
            }, 1000, 'easeOutCubic');
        } else {
            $('.container #search_box').stop().animate({height: 0}, 500);
        }
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

   // 스크롤 시 숨어 있던 #scroll_btn 버튼 보임
   $(window).scroll(function () {
        var wt = $(window).width();
        if (wt > 0 && wt < 1280) {
            var scrollT = $(window).scrollTop();
            if (scrollT >= 100) {
                $('#scroll_btn').stop().animate({
                    bottom: 65
                }, 600);
            } else {
                $('#scroll_btn').stop().animate({
                    bottom: -175
                }, 600);
            }
        } else {
            var scrollT = $(window).scrollTop();
            if (scrollT >= 100) {
                $('#scroll_btn').stop().animate({
                    bottom: 25
                }, 600);
            } else {
                $('#scroll_btn').stop().animate({
                    bottom: -100
                }, 600);
            }
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

   // 제품 사진 swiper 플러그인
   var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction:false
    },
    loop: true,
    speed: 2000
  });

    // 장바구니 추가 버튼 클릭 시 '장바구니에 추가되었습니다.' 알림 송출
    $('#buy ul li').eq(1).on('click', function() {
        alert('장바구니에 추가되었습니다.');
    });
    $('.info_txt .cart').on('click', function() {
        alert('장바구니에 추가되었습니다.');
    });

    // 모바일 화면에서 구매하기 버튼 클릭 시 수량 화면 위로
    $('#buy ul li').eq(2).on('click', function() {
        $('#pay').animate({bottom: 50}, 700);
    });

    // 수량 화면 내 X 버튼 클릭 시 화면 다시 밑으로
    $('#pay > img').on('click', function() {
        $('#pay').animate({bottom: -400}, 700);
    });

    // 상품 정보, 판매 정책, 배송 정보 클릭하면 각각 맞는 팝업 뜸
    $('.info_txt ul > li').eq(3).on('click', function() {
        $('#popup1').css('display', 'block');
    });

    $('.info_txt ul > li:nth-child(7)').on('click', function() {
        $('#popup2').css('display', 'block');
    });

    $('.info_txt ul > li:nth-child(8)').on('click', function() {
        $('#popup3').css('display', 'block');
    });

    // 팝업창 내부 X 버튼 클릭 시 팝업창 닫힘
    $('.popup img').on('click', function() {
        $('.popup').css('display', 'none');
    });


    // 리뷰 작성하기 클릭 시 '로그인이 필요합니다.' 알림 송출
    $('#reviews > a').on('click', function() {
        alert('로그인이 필요합니다.');
    });

    // 리뷰 최신순 | 추천순 애니메이션
    $('#reviews > ul li').on('click', function() {
        $(this).siblings('li').removeClass('click');
        $(this).addClass('click');
    });

    // 리뷰 더 보기 클릭 시 숨어 있던 리뷰들 나타남
    $('#reviews > div').eq(2).css('border-bottom', 'none').nextAll('div').hide();
    $('#reviews img').on('click', function() {
        $('#reviews > div').eq(2).css('border-bottom', '1px solid rgba(122, 102, 76, 0.5)').nextAll('div').slideDown();
        // 숨어 있던 리뷰들 말줄임 플러그인
        $('#reviews > div .txt').dotdotdot();
    });

    // review 말줄임 플러그인
    $('#reviews > div .txt').dotdotdot();

    // PC 화면에서 .info_txt 제어
    $(window).on('scroll', function() {
        var scr = $(window).scrollTop(),
              ht = $('.more_info .img2').offset().top;
        
        if(scr >= ht) {
            $('.info_txt').addClass('no_fixed');
        } else {
            $('.info_txt').removeClass('no_fixed');
        }
    });
});