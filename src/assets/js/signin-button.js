$(function () {

    $("#signin-button").click(function () {
        $("#signin-button").addClass("button-signin-onclick", 250, validate);
    });

    function validate() {
        setTimeout(function(){
            $("#signin-button").removeClass("button-signin-onclick");
            $("#signin-button").addClass("validate",450,callback);
        },2250);
    }

    function callback() {
        setTimeout(function(){
            $("signin-button").removeClass("validate");
        },1250);
    }
});

 