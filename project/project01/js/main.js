// Coment Slider
var swiper1 = new Swiper(".h-comment>.mySwiper", {
    slidesPerView: 1,
    autoplay : { 
        delay : 5000,
        disableOnInteraction : false,
    },
});

// Main Visual Slider
gsap.registerPlugin(ScrollTrigger); // scrollTrigger 호출

var standard = document.querySelector(".main-visual");
var container = document.querySelector(".main-slider-track");

gsap.to(container, {
    x: -(container.offsetWidth - innerWidth), // container의 가로값에서 뷰포트 가로값을 뺀 만큼 X축 음수 스크롤
    ease: "none", // ease 효과 제거
    scrollTrigger: {
    trigger: standard, // 대상
    start: "top top", // 시작점 설정, trigger 상단이 뷰포트 상단에 닿을때 시작
    invalidateOnRefresh: true, // 화면 리사이즈될 때 실행
    pin: true, // 화면 고정
    scrub: true, // 부드러운 스크러빙 설정
    end: "+=" + container.offsetWidth, // 컨테이너의 가로값만큼 스크롤이 되면 종료
    },
})

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