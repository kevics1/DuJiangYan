$(document).ready(function() {
    $("#gotop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    })


    $(".mobNav").click(function() {
        xf = $(this).attr("xf")
        src = $(this).attr("src")
        $(this).attr("src", xf)
        $(this).attr("xf", src)
        if (xf.indexOf("close") > 0) {
            $("#nav").animate({
                height: "100vh"
            });
        } else {
            $("#nav").animate({
                height: "0vh"
            });
        }
    })

    jQuery(".Marquee-top").slide({
        mainCell: ".bd ul",
        autoPlay: true,
        effect: "topMarquee",
        vis: 8,
        interTime: 50
    });
    var swiper = new Swiper('#fbLeft', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },

    });

})

// 获取元素

var box = document.querySelector('.box');

var close_btn = document.querySelector('.close-btn');

// 实现点击关闭的函数

close_btn.onclick = function() {

    box.style.display = 'none';

}