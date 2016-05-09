$(document).ready(function() {
	// Featured image
	$('.post-excerpt .post-content-temp img[alt="featured-image"]').each(function() {     
        var image_src = $(this).attr('src');
        var featured_image = $(this).closest('.post-content-temp').siblings('.post-content').children('p').children('.post-featured-image');
        var post_temp_content = $(this).closest('.post-content-temp');
        
        var temp_image = new Image();
        temp_image.src = image_src;
        temp_image.onload = function() {
            $(post_temp_content).remove();
            $(featured_image).css('opacity', 0).attr('src', image_src).animate({ opacity: 1 }, { duration: 500 });
        };
    });

	// FitVids
	$(".post-content").fitVids();	

	// Navigation
	$('.nav-toggler').click(function() {
		$('body, .nav-menu').addClass('nav-transition');
		$('body').toggleClass('body-nav-open');
		$('.nav-menu').toggleClass('nav-open');
	});

	// Darkbox
	$('.post-full .post-content img').each(function() {
		var imageSrc = $(this).attr('src');
		$(this).wrap('<a href="' + imageSrc + '" rel="darkbox"></a>');
	});

	$('a[rel=darkbox]').darkbox();

	// Highlight.js
	hljs.initHighlightingOnLoad();

	// NProgress
	NProgress.start();
});

$(window).load(function() {
	// NProgress
	NProgress.done();
});