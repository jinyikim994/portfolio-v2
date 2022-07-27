// All Menu
document.querySelector('.all-menu-btn').onclick = function (e) {
    var menu = document.querySelector('.all-menu');
    var btn = document.querySelector('.all-menu-btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}

//Scroll Percentage with Circle Progress bar

let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round( pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#5178A1 ${scrollValue}%, #E6AA9F ${scrollValue}%)`;
    //progressValue.textContent = `${scrollValue}%`;
}
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;

//Tab Menu

$(document).ready(function() {
    $(".tab-title li").click(function() {
        var idx = $(this).index();
        $(".tab-title li").removeClass("on");
        $(".tab-title li").eq(idx).addClass("on");
        $(".tab-cont > div").hide();
        $(".tab-cont > div").eq(idx).show();
    })
});
