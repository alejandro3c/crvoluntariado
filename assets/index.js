
$(document).ready(function (){
    $(".link").click(function (){
        //$(this).animate(function(){
            $('html, body').animate({
                scrollTop: $( '#'+ $(this).data('link') ).offset().top
            }, 750);
        //});
    });
});