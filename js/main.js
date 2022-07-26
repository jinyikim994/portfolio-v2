/* slick slider */

$(document).ready(function(){
    $('.main-slide').slick({
        slidesToShow: 1,
        infinite : true, 
        autoplay: true,
        arrows: true,
        dots: true,
        autoplaySpeed: 5000,
        prevArrow : "<button type='button' class='slick-prev'>ㅡ<br>P<br>R<br>E<br>V<br>ㅡ</button>",// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next'>ㅡ<br>N<br>E<br>X<br>T<br>ㅡ</button>",// 다음 화살표 모양 설정
        
    });
});