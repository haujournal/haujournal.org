$(document).ready(function(){
    var img_dir = '../images/backgrounds/' // Relative to scripts folder
    var img_bg = new Array(
        ["hau-1.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-41.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-31.jpg","Alfonso Castellanos",'https://www.flickr.com/photos/thiefoli/sets/'],
        ["hau-4.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-6.jpg","Italo Bertolasi",'http://www.italobertolasi.com/'],
        ["hau-42.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-37.jpg","Juan Javier Rivera",'#'],
        ["hau-34.jpg","Ankush Samant",'http://wheneveridontgetbored.blogspot.in/'],
        ["hau-45.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-10.jpg","Italo Bertolasi",'http://www.italobertolasi.com/'],
        ["hau-15.jpg","Giovanni da Col",'#'],
        ["hau-39.jpg","Timour Claquin Chambugong",'http://timourclaquinchambugong.smugmug.com/'],
        ["hau-48.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-18.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-38.jpg","Timour Claquin Chambugong",'http://timourclaquinchambugong.smugmug.com/'],
        ["hau-40.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-19.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-43.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-36.jpg","Naraya Barros",'https://www.flickr.com/photos/barrosnayara/'],
        ["hau-33.jpg","Ankush Samant",'http://wheneveridontgetbored.blogspot.in/'],
        ["hau-47.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-23.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-32.jpg","Alfonso Castellanos",'https://www.flickr.com/photos/thiefoli/sets/'],
        ["hau-44.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-24.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-30.jpg","Adriano Godoy",'https://www.flickr.com/photos/adrianosgodoy/sets/72157645925028693/'],
        ["hau-46.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/'],
        ["hau-28.jpg","Luke Duggleby",'http://www.lukeduggleby.com'],
        ["hau-35.jpg","Edward Moon-Little",'http://www.worldartwanderer.portfoliobox.me/'],
        ["hau-49.jpg","Lorenzo Ferrarini",'http://lorenzoferrarini.com/']
    );
    var rn = Math.floor(Math.random()*(img_bg.length));
    $('.credits').empty().prepend('<a href="' + img_bg[rn][2] + '"> Photo by ' + img_bg[rn][1] + '</a>');
    $('.headerBg').css('background-image', 'url(' + img_dir + img_bg[rn][0] + ')');

    function changeImage() {
        // Get new image
        rn = Math.floor(Math.random()*(img_bg.length));
        // Fade out image and credits and replace on complete
        $('.credits').animate({ opacity: 0 }, {
            duration: 3000,
            complete: function(){
                $(this).empty().prepend('<a href="' + img_bg[rn][2] + '"> Photo by ' + img_bg[rn][1] + '</a>');
            }
        });
        $('.headerBg').animate({ opacity: 0 }, {
            duration: 3000,
            complete: function(){
                $(this).css('background-image', 'url(' + img_dir + img_bg[rn][0] + ')');
            }
        });
        // Fade in new image and credits
        $('.headerBg').animate({ opacity: 1 }, { duration: 3000 });
        $('.credits').animate({ opacity: .6 }, { duration: 3000 });
    }

    // Change background every 10 seconds
    setInterval(function() {
        changeImage();
    }, 10000);

});
