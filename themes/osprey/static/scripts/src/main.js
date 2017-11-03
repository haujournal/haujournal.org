$(document).ready(function() {

    // Nav is fixed to top
    // Move dropdowns to bottom
    $("nav").addClass("nav-fixed");
    $("nav > div.logo").css('visibility','visible').fadeIn();
    $("nav > div.nav-toggle").css('visibility','visible').fadeIn();
    $("nav > div > ul").removeClass('top');
    $("nav > div > ul").addClass('bot');

    // Full screen nav open on click
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(this).find("img").toggle();
    });

    // Full screen nav close on link click
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });

    // Highlight.js initialization
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
