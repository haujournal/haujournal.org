$(document).ready(function(){
    var img_dir = '../images/backgrounds/' // Relative to scripts folder
    var img_bg = new Array(
        ["LorenzoFerrarini5.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["alfonsocastellanos3.jpg","Alfonso Castellanos",'https://www.flickr.com/photos/thiefoli/sets/'],
        ["adrianogodoy1.jpg","Adriano Godoy",'https://www.flickr.com/photos/adrianosgodoy/sets/72157645925028693/'],
        ["edwardlittlemoon7.png","Edward Moon-Little",'http://www.worldartwanderer.portfoliobox.me/'],
        ["LorenzoFerrarini17.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["pajefilmes2.jpg","Juan Javier Rivera",'#'],
        ["ankushsamant2.JPG","Ankush Samant",'http://wheneveridontgetbored.blogspot.in/'],
        ["TimourClaquinChambugong5.jpg","Timour Claquin Chambugong",'http://timourclaquinchambugong.smugmug.com/'],
        ["edwardlittlemoon3.png","Edward Moon-Little",'http://www.worldartwanderer.portfoliobox.me/'],
        ["TimourClaquinChambugong10.jpg","Timour Claquin Chambugong",'http://timourclaquinchambugong.smugmug.com/'],
        ["nayarabarros1.jpg","Nayara Barros",'https://www.flickr.com/photos/barrosnayara/'],
        ["ankushsamant7.JPG","Ankush Samant",'http://wheneveridontgetbored.blogspot.in/'],
        ["alfonsocastellanos4.jpg","Alfonso Castellanos",'https://www.flickr.com/photos/thiefoli/sets/'],
        ["pajefilmes5.jpg","Juan Javier Rivera",'#'],
        ["ankushsamant10.JPG","Ankush Samant",'http://wheneveridontgetbored.blogspot.in/'],
        ["nayarabarros3.jpg","Nayara Barros",'https://www.flickr.com/photos/barrosnayara/'],
        ["adrianogodoy5.jpg","Adriano Godoy",'https://www.flickr.com/photos/adrianosgodoy/sets/72157645925028693/'],
        ["edwardlittlemoon1.png","Edward Moon-Little",'http://www.worldartwanderer.portfoliobox.me/'],
    );
    var rn = Math.floor(Math.random()*(img_bg.length));
    $('.credits').empty().prepend('<a href="' + img_bg[rn][2] + '"> Photo by ' + img_bg[rn][1] + '</a>');
    $('.headerBg').css('background-image', 'url(' + img_dir + img_bg[rn][0] + ')');

    function changeImage() {
        // Get new image
        rn = Math.floor(Math.random()*(img_bg.length));
        // Fade out image and credits and replace on complete
        $('.credits').fadeOut("slow", function(){
                $(this).empty().prepend('<a href="' + img_bg[rn][2] + '"> Photo by ' + img_bg[rn][1] + '</a>');
            }
        );
        $('.headerBg').fadeOut("slow", function(){
                $(this).css('background-image', 'url(' + img_dir + img_bg[rn][0] + ')');
            }
        );
        // Fade in new image and credits
        $('.headerBg').fadeIn("slow");
        $('.credits').fadeIn("slow");
    }

    // Change background every 10 seconds
    setInterval(function() {
        changeImage();
    }, 10000);

});
