

window.onload = function () {
    const Classname = 'show';
    const timeout = 3000;
    const $target = $('.opening-curtain');

    
    // $target.addClass(Classname);
    setTimeout(() => {
        $target.removeClass(Classname);
    }, timeout);

    var scroll3 = document.querySelectorAll('.home-explain');
    var backhome = document.querySelectorAll('.back-ground-home');
    var AnimationExplain = function() {
        for(var i = 0; i < scroll3.length; i++) {
            var triggerMargin = 150;
            if(window.innerHeight > scroll3[i].getBoundingClientRect().top + triggerMargin) {
                scroll3[i].classList.add('show');
                backhome[i].classList.add('show');
            } else {
                scroll3[i].classList.remove('show');
                backhome[i].classList.remove('show')
            }
        }
    }
    window.addEventListener('scroll', AnimationExplain);



    var scroll2 = document.querySelectorAll('.home-item');
    var AnimationHome = function() {
        for(var i = 0; i < scroll2.length; i++) {
            var triggerMargin = 300;
            if(window.innerHeight > scroll2[i].getBoundingClientRect().top + triggerMargin) {
                scroll2[i].classList.add('show');
            } else {
                scroll2[i].classList.remove('show');
            }
        }
    }
    window.addEventListener('scroll', AnimationHome);

    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    var delayitem = document.querySelectorAll('.delayItem');
    var timeout2 = 200

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');

        setTimeout(() => {
            delayitem[0].classList.toggle('show')
        }, timeout2)
        setTimeout(() => {
            delayitem[1].classList.toggle('show')
        }, timeout2*2)
        setTimeout(() => {
            delayitem[2].classList.toggle('show')
        }, timeout2*3)
        setTimeout(() => {
            delayitem[3].classList.toggle('show')
        }, timeout2*4)
        
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });



    document.getElementById('sub-body').animate( {
        background: ["black", "rgb(255, 255, 255)"]
    }, 
    {
        fill: "both",
        duration: 3000
    }

);
    var scroll = document.querySelectorAll('.item');
    var scroll2 = document.querySelectorAll('.home-item');

    var Animation = function() {
        for(var i = 0; i < scroll.length; i++) {
            var triggerMargin = 90;
            if(window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
                scroll[i].classList.add('show');
            } else {
                scroll[i].classList.remove('show');
            }
        }
    }
    window.addEventListener('scroll', Animation);

    

};


$(document).ready(function(){
    $('.sub-title').on('click', function(){
        $(this).next().slideToggle('sub-menu')
    })
})

// $(document).ready(function(){
//     $('.mem').on('click', function(){
//         $(this).next().slideToggle('mem-menu')
//     })
// })

$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-150;
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


