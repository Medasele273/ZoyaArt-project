$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            $('header').addClass('header-bg');
        }else if($('header').hasClass('header-bg')){
            $('header').remove('header-bg');
        }
    });
})