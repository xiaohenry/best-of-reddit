function bindEventListeners(){$("input, textarea").on("focus",function(){$(this).addClass("used")}).on("blur",function(){$(this).val()||$(this).removeClass("used")}),$(".logo").on("click",function(){$(".about-container").hide(),$(".contact-container").hide(),$("footer").hide(),$(".more-container").show(),$(".nav-links").show(),$(".photo-container").show(),$(".contact-link").removeClass("selected"),$(".about-link").removeClass("selected")}),$(".contact-link").on("click",function(){$(".nav-links").hide(),$(".photo-container").hide(),$(".about-container").hide(),$(".more-container").hide(),$("footer").show(),$(".contact-container").show(),$(".about-link").removeClass("selected"),$(this).addClass("selected")}),$(".about-link").on("click",function(){$(".nav-links").hide(),$(".photo-container").hide(),$(".contact-container").hide(),$(".more-container").hide(),$("footer").show(),$(".about-container").show(),$(".-link").removeClass("selected"),$(this).addClass("selected")}),$(".subreddit-filter").on("click",function(){var e=$(this).data("subreddit");$(".selected").removeClass("selected"),$(this).addClass("selected"),$(".photo").each(function(){$(this).removeClass("hidden")}),"all"!==e&&$(".photo").each(function(){$(this).hasClass(e)||$(this).addClass("hidden")})}),$(".more-button").on("click",function(){fetchPhotos()})}function fetchPhotos(){$(".more-container").hide(),$(".loader-container").show();var e=Parse.Object.extend("Photo"),t=new Parse.Query(e);t.limit(batchSize),t.skip(curDisplayed),t.descending("created"),t.find().then(function(e){curDisplayed+=batchSize;var t=$(".photo-container");e.forEach(function(e){var o=e.get("subreddit").toLowerCase(),i=e.get("score"),a=e.get("src"),n=e.get("created"),s=e.get("author"),c=e.get("permalink");t.append('<div class="hidden photo '+o+'"><a class="grouped" rel="bestof" href="'+a+'"><img class="photo-img" data-lightbox="bestof" src="'+a+'"></a><div class="overlay"><div class="photo-info"><i class="fa fa-arrow-up fa-1x"></i> '+i+'</div><div class="photo-info"><a target="_blank" href="https://reddit.com/r/'+o+'"><i class="fa fa-reddit fa-1x"></i> r/'+o+'</a></div><div class="photo-info"><a target="_blank" href="https://reddit.com/user/'+s+'"><i class="fa fa-pencil fa-1x"></i> '+s+'</a></div><div class="photo-info"><a target="_blank" href="https://reddit.com'+c+'"><i class="fa fa-link fa-1x"></i> link</a></div></div></div>')}),$(".hidden.photo").each(function(){var e=$(".selected.subreddit-filter").data("subreddit");("all"===e||$(this).hasClass(e))&&$(this).removeClass("hidden"),isMobile&&$(this).children(".overlay").css("opacity",1)}),$(".loader-container").hide(),$(".more-container").show()},function(e){console.log("Failed to load photos")})}Parse.initialize("X2LAw7lIniuSLwzVLsQRQSRqCXwtwBHEg09Okase","5m9oPZAoy6Nk8mMIKGLO4ASS7FAhNj9aCJkRQud7");var curDisplayed=0,batchSize=9,isMobile=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(isMobile=!0,batchSize=6),$(document).on("ready",function(){$("a.grouped").fancybox({padding:3,closeSpeed:100,nextEffect:"fade",closeEffect:"fade",nextSpeed:200}),function e(){bindEventListeners(),fetchPhotos()}()});var Utils={testImage:function(e){var t=new Image;t.onload=function(){return!0},t.onerror=function(){return!1},t.src=e}};