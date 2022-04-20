

window.onload = function () {
    document.body.animate( {
        background: ["black", "rgb(226, 226, 226)"]
    }, 
    {
        fill: "both",
        duration: 6000
    }
);
    var scroll = document.querySelectorAll('.item');
    var Animation = function() {
        for(var i = 0; i < scroll.length; i++) {
            var triggerMargin = 90;
            if(window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
                scroll[i].classList.add('show');
            } else {
                scroll[i].removeClass('show')
            }
        }
    }
    window.addEventListener('scroll', Animation);

    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};


$(document).ready(function(){
    $('.sub-title').on('click', function(){
        $(this).next().slideToggle('sub-menu')
    })
})

$(document).ready(function(){
    $('.mem').on('click', function(){
        $(this).next().slideToggle('mem-menu')
    })
})

$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
    });
});

$(document).ready(function(){
    var btn = $('.scroll-button')
    var timer;
    $(window).scroll(function(){
        btn.removeClass('active');
        clearTimeout(timer);

        timer = setTimeout(function() {
            if($(this).scrollTop()) {
                btn.addClass('active');
            } else {
                btn.removeClass('active');
            }
        }, 200);
    });
    btn.on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        });
    });
});


