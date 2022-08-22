$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.logo-container').css({
        'transform' : 'translate(0px, '+ wScroll /100 +'%)' 
    })

    $('.foreground').css({
        'transform' : 'translate(0px, -'+ wScroll /50 +'%)'
    })
});