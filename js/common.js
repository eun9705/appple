//panel
$(document).ready(function(){
    var btn =  '.panel a';
    $(btn).click(function(){
        $(this).toggleClass('active'); 
        $('.gnb').toggleClass('active');
    });
});

//gnb
$(document).ready(function(){
    function pcGnb(){
        $('.mainNav').mouseenter(function(){
            $('.subNav').stop().fadeOut(300);
            $(this).next().stop().fadeIn(300);
            $(this).parent().mouseleave(function(){
                $(this).find('.subNav').stop().fadeOut(300);  
            });
        });
    }
    
    function mGnb(){
        $('.panel a').off('click');
        $('.panel a').click(function(){
            $(this).toggleClass('active');
            $('.gnb').toggleClass('active');
            
            var has = $(this).hasClass('active');
        
            
            if(!has){ 
                $('body').css('overflow','visible');
                $('.gnb .subNav').fadeOut(300); 
            }else{ 
                $('body').css('overflow','hidden'); 
            }
        });
        
        $('.gnb .mainNav').off('click');
        $('.gnb .mainNav').click(function(){
            
            var index = $(this).parent().index();
            if(index == 3 || index == 4 || index == 5){
                $('.gnb .subNav').stop().fadeOut(300);    
            }
            
            var is = $(this).next().is(':hidden');
            
            if(is){
                $('.gnb .subNav').stop().fadeOut(300);
                $(this).next().stop().fadeIn(300);
            }else{
                $(this).next().stop().fadeOut(300);
            }
        });
    }
    
    $(window).resize(function(){
        $('.gnb, .panel a').removeClass('active');
        $('.subNav').fadeOut(300);
        
        
        var w = window.innerWidth;
        
        if(w >= 1024){
            $('.gnb .mainNav').off('click');
            
            pcGnb();
        }else{
            $('.mainNav').off('mouseenter');
            $('.mainNav').off('mouseleave');
            
            mGnb();
        }
    });
    $(window).trigger('resize');
});