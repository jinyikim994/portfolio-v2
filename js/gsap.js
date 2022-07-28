//Quote 
var $quote = document.querySelectorAll(".gsap .box");
var tl = gsap.timeline({
scrollTrigger: {
    trigger: ".quote",
    pin: true,
    scrub: 0.3,
    start: "top top",
    end: "+=3000"
}
});
tl.to($quote, {xPercent: -100, duration:2, ease: "none", stagger:3})
.to({},{duration:1});

//Thanks
var tl = gsap.timeline({
    repeat:-1,
    // 무한히 반복하고 싶다면 repeat:-1
    repeatDelay:1
    // repeatDelay : 애니메이션이 끝나고 쉬는시간
});

tl.from(".thank>span", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.5
});

tl.to(".thank>span", {
    opacity: 0,
    y: -100,
    duration: 1,

    stagger: {
        each: "0.1",
        from: "end"
    }
    
    }, "+=2");// "+=2" 는 delay를 나타냄