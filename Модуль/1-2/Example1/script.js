jQuery(document).ready(function() {
	jQuery('.section-title').click(function(e) {
		var currentAttrValue = jQuery(e.target).attr('href');
		if(jQuery(e.target).is('.active')) {
			// Remove active class to section title
			jQuery('.section-title').removeClass('active');
			var content = jQuery('.section-content');
			// Close the hidden content panel
			content.slideUp(300); content.removeClass('open');
		}else {
			// Add active class to section title
			jQuery(e.target).addClass('active');
			// Open up the hidden content panel
			jQuery(currentAttrValue).slideDown(300).addClass('open'); 
		}
		e.preventDefault();
	});
});