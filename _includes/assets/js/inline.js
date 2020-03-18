if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

$(document).ready(function() {

  // Mobile navigation
	$('.burger, .close').click(function(event) {
		$('.header .nav').fadeToggle(200);
		$('.burger, .close').toggle();
	});

  // Add photo captions from title attribute
  $('.post-page-article img').each(function() {

      if ($(this).attr('title').length) {
        var imgCaption = $(this).attr('title');
        $(this).after('<p class="image-caption">' + imgCaption + '</p>');
      }

  });

  // Responsive tables wrapper
  $('table').each(function() {
    $(this).wrapAll('<div class="table-wrapper"></div>');
  });

});