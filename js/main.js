//popup
$(document).ready(function(){
    var popup = '.popupBg';
    var cookie = '.cookieSave';
    var close = '.closeBtn';
    
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $(cookie).click(function(){
        setCookie('exCookie','done',1);
        $(popup).fadeOut(0);
    });

    $(close).click(function(){
        $(popup).fadeOut(0);
    });

    var cookiedata = document.cookie;
    if(cookiedata. indexOf('exCookie=done') < 0 ){
        $(popup).fadeIn(0);
    }else{
        $(popup).fadeOut(0);
    }
});

//fullpage
$(document).ready(function(){
    var video01 = document.getElementById('video01');
    var video02 = document.getElementById('video02');
    var video03 = document.getElementById('video03');
    
    new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05'],
        menu: '#pagebtn',
        afterLoad: function(origin, destination, direction){
            if(destination.index == 2){
                $('.ipad figure').addClass('active');
            } 
            if(destination.index == 4){
                $('.watch .watchBg').addClass('active');
            }  
            if(destination.index == 5){
                $('#pagebtn').addClass('active');
            }  
            if(destination.index == 0){
                $('#video01').trigger('play');
            }
        },
        onLeave: function(origin, destination, direction){
            $('#pagebtn').removeClass('active');
            
            video01.pause();
            video01.currentTime = 0;
            video02.pause();
            video02.currentTime = 0;
            video03.pause();
            video03.currentTime = 0;
        },
    });
});

//main
$(document).ready(function(){
    var video01 = document.getElementById('video01');
    var video02 = document.getElementById('video02');
    var video03 = document.getElementById('video03');
    
    var swiper = new Swiper('.main .swiper-container', {
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'fraction',
        },
        on: {
            init: function () {
                video01.play();
            },
            slideChangeTransitionStart: function(){
                video01.pause();
                video01.currentTime = 0;
                video02.pause();
                video02.currentTime = 0;
                video03.pause();
                video03.currentTime = 0;
            },
            slideChangeTransitionEnd: function(){
                var index = $('.main .swiper-slide-active').index();
                var text = '#video0';
                var video = text + (Number(index) + 1);
                $(video).trigger('play');
                
                
            }
        }
    });
});

//iphone
$(document).ready(function(){
    var swiper = new Swiper('.iphone .swiper-container', {
        loop: true,
        pagination: {
            el: '.iphone .swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        spaceBetween: 50,
    });
    $('.iphone .swiper-button-playstop a').click(function(){
        $(this).toggleClass('active'); 
        
        var has = $(this).hasClass('active');
        
        if(has){
            swiper.autoplay.stop();
        }else{
            swiper.autoplay.start();
        }
    });
});

