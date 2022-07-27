// Coment Slider
var swiper1 = new Swiper(".h-comment>.mySwiper", {
    slidesPerView: 1,
    autoplay : { 
        delay : 5000,
        disableOnInteraction : false,
    },
});

// Main Visual Slider


//Product Slider
var swiper3 = new Swiper(".product-slider .swiper-container", {
    autoplay: { 
        delay: 1000, //자동 슬라이드시,한 슬라이드에 머무르는 시간 1초
        disableOnInteraction: false //false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    }, 
    spaceBetween: 1, //슬라이드 간 여백 
    slidesPerView: 5, //한 화면에 들어오는 슬라이드 갯수 
    centeredSlides: true, //활성화된 슬라이드 가운데 배치
    roundLengths: true, // 일반적인 해상도 화면에서 흐릿한 텍스트를 방지하기 위해 슬라이드 너비와 높이 값을 반올림 하도록 설정
    loop: true, //반복
    navigation: {
        nextEl: ".product-slider .swiper-button-next1",
        prevEl: ".product-slider .swiper-button-prev1"
    }
    });


//Live Slider
var swiper4 = new Swiper(".live-wrap .mySwiper", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }, 
    spaceBetween: 1,
    slidesPerView: 1,
    pagination: {
        el: ".live-wrap .swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".live-wrap .swiper-button-next",
        prevEl: ".live-wrap .swiper-button-prev",
    },
});

// Best Item Slider
var swiper5 = new Swiper ('.best-seller .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.best-seller .swiper-pagination',
    },
    navigation: {
        nextEl: '.best-seller .swiper-button-next',
        prevEl: '.best-seller .swiper-button-prev',
    },	

    breakpoints: {
        // 화면의 넓이가 320px 이상일 때
        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
})