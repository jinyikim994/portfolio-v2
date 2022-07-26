//Contact

gsap.timeline({
    scrollTrigger:{
    trigger:".box",
    start:"center center" , // Animation start at this point
    end: "bottom top" ,
    //markers:true,
    scrub:true,
    pin : true
    }
})
.from(".text1", {x : innerWidth * 2})
.from(".text2", {x : innerWidth * -1 })
.from(".text3", {x : innerWidth * -1 })
.from(".form",{
    y : innerHeight * 1,
    rotate : 360    
})