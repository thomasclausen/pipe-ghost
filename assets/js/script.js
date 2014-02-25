/**
 * Main JS file for Pipe
 */

(function ($) {
	"use strict";

	$(document).ready(function(){
		$('html').removeClass('no-js');

		if ($('body').hasClass('home-template') || $('body').hasClass('archive-template')) {
			$('article').each(function() {
				if ($('.post-image .rectangle .circle img', this).attr('src') !== undefined) {
					$('.post-image .rectangle .circle', this).prepend('<div class="image" />');
					$('.post-image .rectangle .circle .image', this).css({
						backgroundImage: 'url(' + $('.post-image .rectangle .circle img', this).attr('src') + ')'
					});
					$('.post-image .rectangle .circle p', this).remove();
				}
			});
			/*$('article .post-image').on('click', function() {
				$(this).parent().find('.post-content a').attr('href');
			});*/
		}

		if ($('body').hasClass('post-template')) {
			if ($('article .post-content > p:first-of-type img:first-of-type').attr('src') !== undefined) {
				$('article .post-content > p:first-of-type img:first-of-type').prependTo('article .post-image');
				$('<meta name="twitter:image:src" content="' + $('article .post-image img').attr('src') + '" />').insertAfter('head meta[content=summary]');
				$('head meta[content=summary]').attr('content', 'summary_large_image');
				$('<meta property="og:image" content="' + $('article .post-image img').attr('src') + '" />').insertAfter('head meta[content=article]');
				if ($('article .post-content > p:first-of-type').html() === '') {
					$('article .post-content > p:first-of-type').remove();
				} else {
                    $('article .post-content > p:first-of-type').appendTo('article .post-image .post-image-caption .rectangle .circle');
                }
			} else {
                $('article .post-image .post-image-caption').remove();
            }
			
            var post_meta = $('.post-meta time');
            post_meta.html(post_meta.html().replace('st', '<sup>st</sup>'));
            post_meta.html(post_meta.html().replace('nd', '<sup>nd</sup>'));
            post_meta.html(post_meta.html().replace('rd', '<sup>rd</sup>'));
            post_meta.html(post_meta.html().replace('th', '<sup>th</sup>'));
		}
	});
}(jQuery));