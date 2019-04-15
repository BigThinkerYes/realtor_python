/*$(document).ready(function(){
    $("#info").click(function(){
        $("#top-bar").toggle();
    });

});*/
$(document).ready(function(){
$(function(){
    $("#top-bar").hide();
    $("#info").on("click", function(){
        $("#top-bar").toggle(2000);
    });
});
});

setTimeout(function(){
    $("#top-bar").fadeout('slow');
}, 1000);