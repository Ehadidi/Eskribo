
$(window).on("load", function(){
    $('.loader').fadeOut("slow" , function (){
        $( '.loader' ).remove();
    });
})

$(document).ready(function (){
    $(".switch-toggle").on("click" , function (){
        $(this).toggleClass("toggled");
    })
})

$(".bars,.nav-layer").click(function(){
    $(".bars").toggleClass("x-bars");
    $(".nav-layer").toggleClass("open");
    $(".responsive-nav").toggleClass("open");
    // $(".bars").css("z-index" , "99")
});
$(".profile-drop,.profile-menu-layer").on("click" , function(){
    $(".profile-menu-layer").toggleClass("open");
    $(".profile-menu").toggleClass("open");
    // $(".bars").css("z-index" , "99")
});
$(document).ready(function(){
    $("#tact,#tact1").on("click" , function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    })
})
$(document).ready(function(){
    $("#abilit,#abilit1").on("click" , function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#abilities").offset().top
        }, 1000);
    })
})
$(document).ready(function(){
    $("#complet,#complet1").on("click" , function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#completed").offset().top
        }, 1000);
    })
})

var ls = 0;
$(window).scroll(function (event){
    var win = $(window).scrollTop();
    if(win > ls ) {
        $(".bottom-nav").addClass("bottom-nav_scroll")
    }else {
        $(".bottom-nav").removeClass("bottom-nav_scroll")
    }
    ls = win
});

$(".nav-bar ul li").on("click" , function (){
    $(".nav-bar ul li").removeClass("act");
    $(this).addClass("act");
})
