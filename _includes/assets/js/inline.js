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
	$('.burger, .close').click(function(event) {
		$('.header .nav').fadeToggle();
		$('.burger, .close').toggle();
	});
});