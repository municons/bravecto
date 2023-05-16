$(document).ready(function(){


    var $accordion = document.querySelectorAll('.accordion');
    var $abbrBtn = $('#abbr_btn');
    var $closeBtn = $('.close_btn');
    var $referBtn = $('#refer_btn');

    if ($accordion) {
        for (var i = 0; i < $accordion.length; i++) {
            $accordion[i].addEventListener('click', function(){
                $(this).toggleClass('accordion--open');
                $(this).next().toggleClass('visible_hide');
            });
        }
    }

    if ($abbrBtn.length > 0) {
        $abbrBtn.click(function(event){
            var $abbrPopup = $('#popup_abbr');
            $abbrPopup.addClass('popup--show');
        });
    }

    if ($closeBtn) {
        $closeBtn.click(function(){
            $(this).parent().parent().removeClass('popup--show');
        });
    }

    if ($referBtn) {
        $referBtn.click(function(event){
            var $referPopup = $('#popup_refer');
            $referPopup.addClass('popup--show');
        });
    }
	
	noBounce.init({ animate : true });

	/*SWIPE DETECT*/
	$("#main").on("swipeleft", swipeLeftHandler);

	function swipeLeftHandler(event){
		//nextSlide();
	}

	$("#main").on("swiperight", swipeRightHandler);

	function swipeRightHandler(event){
		//prevSlide();
	}
});

function scrolltobottom(){
        window.scrollTo(0, document.body.scrollHeight);
        document.getElementById('scrolldown').style.display = "none";
        document.getElementById('scrollup').style.display = "inline";
        }

function scrolltotop(){
        window.scrollTo(0, 0);
        document.getElementById('scrollup').style.display = "none";
        document.getElementById('scrolldown').style.display = "inline";
        }

function veevaNavigateScene(linkBtn) {
	var page = linkBtn.attr('data-page');
	if(page == '') return false;

	veevaNavigateSceneWithID(page);
}
function veevaNavigateSceneWithID(id) {
	if(id == '') return false;

	var presentation = $('#main').attr('presentation-id');
	var toPage = presentation+'_'+id;
	var theURL = toPage + '.zip'; 
    if (com.veeva.clm.gotoSlide(theURL) == null)
        {var newurl = "../"+toPage+"/"+toPage+".html";
        document.location.href=newurl;}
    else
        {
           com.veeva.clm.gotoSlide(theURL); 
        }
}

function veevaNavigatePresentation(linkBtn) {
	var id = linkBtn.attr('data-page');
	var presentation = linkBtn.attr('data-presentation');

	if(id == '' || presentation == '') return false;

	veevaNavigatePresentationWithID(id, presentation);
}
function veevaNavigatePresentationWithID(id, presentation) {
	if(id == '' || presentation == '') return false;

	var toPage = presentation+'_'+id;
	var theURL = toPage + '.zip';
	com.veeva.clm.gotoSlide(theURL, presentation);
}

function prevSlide(){
	com.veeva.clm.prevSlide();
}
function nextSlide(){
	com.veeva.clm.nextSlide();
}

$(document).ready(function() {
	/*SUBMENU*/
	$('.open-submenu').click(function(){
		if($(this).find('.submenu:visible').length>0){
			$('.submenu').hide();
		} else {
			$('.submenu').hide();
			$(this).find('.submenu').show();
		}
	});

	/*LINKS*/
	$('.link').click(function(){
		veevaNavigateScene($(this));
	});
	$('.linkEx').click(function(){
		veevaNavigatePresentation($(this));
	});

	$('.overlay').click(function(){
		if($(this).hasClass("inside")){
			//do nothing
		} else {
			localStorage.setItem("beforeOverlay", $('#main').attr('slide-id'));
		}
		veevaNavigateScene($(this));
	});

	$('.shared').click(function(){
		if($(this).hasClass("inside")){
			//do nothing
		} else {
			localStorage.setItem("beforeShared", $('#main').attr('slide-id'));
		}
		veevaNavigateScene($(this));
	});
	$('.sharedEx').click(function(){
		if($(this).hasClass("inside")){
			//do nothing
		} else {
			localStorage.setItem("lastPresentation", $('#main').attr('presentation-id'));
			localStorage.setItem("beforeSharedEx", $('#main').attr('slide-id'));
		}
		veevaNavigatePresentation($(this));
	});

	$('.close-overlay-btn').click(function(){
		var sid = localStorage.getItem("beforeOverlay");
		localStorage.removeItem("beforeOverlay");

		if(sid != null) {
			veevaNavigateSceneWithID(sid);
		}
	});

	$('.return-btn').click(function(){
		if (localStorage.getItem("lastPresentation") === null) {
			var sid = localStorage.getItem("beforeShared");
			localStorage.removeItem("beforeShared");

			if(sid != null) {
				veevaNavigateSceneWithID(sid);
			}
		} else {
			var sid = localStorage.getItem("beforeSharedEx");
			localStorage.removeItem("beforeSharedEx");
			var pid = localStorage.getItem("lastPresentation");
			localStorage.removeItem("lastPresentation");
			veevaNavigatePresentationWithID(sid, pid);
		}
	});
	$('.prev-btn').click(function(){
		prevSlide();
	});
	$('.next-btn').click(function(){
		nextSlide();
	});

});
