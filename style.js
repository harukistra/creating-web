

$(document).ready(function(){
    $('#open-nav a').on('click', function(){
        $(this).next().slideToggle('hidden');
    });
});

$(document).ready(function(){
    $('.sub-title').on('click', function(){
        $(this).next().slideToggle('sub-menu')
    })
})

window.onload = function() {
    document.body.animate( {
        background: ["black", "rgb(226, 226, 226)"]
    }, 
    {
        fill: "both",
        duration: 6000
    }
);
};

$(document).ready(function(){
$('.links').on('click', function(event){
    event.preventDefault();
    let hrefurl = $(this).attr('href');
    $('body').addClass('ScreenCurtain');
    setTimeout(function(){
        window.location = hrefurl;
    }, 500);
});
});

$(document).ready(function(){
$(function() {
    $('body').removeClass('ScreenCurtain');
});
});

$(document).ready(function(){
window.onpageshow = function(event) {
    if (event.persisted) {
        $('body').removeClass('ScreenCurtain');
    }
}
});

