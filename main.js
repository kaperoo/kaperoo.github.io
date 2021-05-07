$(document).ready(function(){
    $("#logo").hover(
        function(){
            $(this).attr("src", "./resources/pf.gif");
        },
        function()
        {
            $(this).attr("src", "./resources/Pink_Floyd_logo.svg");
        });
});