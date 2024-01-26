function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    const innerContainer = document.querySelector(".doc-inner"); // Adjust the selector as needed
    innerContainer.scrollTop = element.offsetTop;
  }
}

$(document).ready(function () {
  /* ===== Affix Sidebar ===== */
  /* Ref: http://getbootstrap.com/javascript/#affix-examples */
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    scrollToElement(hash);
  }

  $("#doc-menu").affix({
    offset: {
      top: $("#header").outerHeight(true) + $("#doc-header").outerHeight(true) + 45,
      bottom: $("#footer").outerHeight(true) + $("#promo-block").outerHeight(true) + 75,
    },
  });

  /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
  $(window).on("load resize", function () {
    $(window).trigger("scroll");
  });

  /* Activate scrollspy menu */
  $(".doc-inner").scrollspy({ target: "#doc-nav", offset: 200 });

  /* Smooth scrolling */
//   $("a.scrollto").on("click", function (e) {
//     //store hash
//     var target = this.hash;
//     e.preventDefault();
//     $(".doc-inner").scrollTo(target, 800, { offset: 0, axis: "y" });
//     // display anchor
//     document.location.hash = target;
//   });

  /* ======= jQuery Responsive equal heights plugin ======= */
  /* Ref: https://github.com/liabru/jquery-match-height */

  $("#cards-wrapper .item-inner").matchHeight();
  $("#showcase .card").matchHeight();

  /* Bootstrap lightbox */
  /* Ref: http://ashleydw.github.io/lightbox/ */

  $(document).delegate('*[data-toggle="lightbox"]', "click", function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

  window.addEventListener(
    "hashchange",
    function (e) {
      e.preventDefault(); // Prevent default scroll behavior

      // Optional: Add your custom scrolling or other logic here
      // For example, manually scroll to an element with the ID from the hash
      const hash = window.location.hash.replace("#", "");
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        // Perform a scroll to the target element or other custom actions
        // For instance, scroll an inner div instead of the window
        // innerDiv.scrollTop = targetElement.offsetTop;
      }
    },
    false
  );

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const hash = this.getAttribute("href");

      // Manually update the hash
      history.pushState(null, null, hash);

      // Optional: Add custom logic here for what should happen when a hash link is clicked
      scrollToElement(hash.substring(1));
    });
  });
});
