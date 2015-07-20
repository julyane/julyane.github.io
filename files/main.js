/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

$(document).ready(function() {
	$("header, header > div").css("height", $(window).height());

	/* Menu */
	$('nav li:not(.language) a').on('click',function (e) {
		$("nav a").removeClass("active");
		$(this).toggleClass("active");
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() == 0) {
			$("nav a").removeClass("active");
			$("header p").removeClass("opacity");
		} else {
			$("header p").addClass("opacity");
		}
        if ($(this).scrollTop() <= $(window).height()-50) {
        	$("nav").removeClass("menufixo");
            $("nav").css("bottom", $(this).scrollTop());
        } else {
            $("nav").addClass("menufixo");
        }
    });

	// Gists
    jQuery(".gists > li > a").click(function() {
        jQuery(this).parent().find(".gist").animate({
            height: 'toggle'
        });
        jQuery(this).parent().toggleClass("active");
        var atributo = jQuery(this).attr("title");
        if (atributo == "Mostrar informações") {
            jQuery(this).attr("title", "Esconder informações");
        } else {
            jQuery(this).attr("title", "Mostrar informações");
        }
        return false;
    });

});

$(window).load(function(){
	/* Portfolio */
	$('#portfolio .box').masonry({
	  	itemSelector: '.box3'
	});
	$("#portfolio .box3").each(function(){
    	$(this).find("div").css("height", $(this).find("img").outerHeight());
    });
});
