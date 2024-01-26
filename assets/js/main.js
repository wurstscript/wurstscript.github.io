function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

function scrollToElement(id) {
    const slugID = slugify(decodeURIComponent(id));
  const element = document.getElementById(slugID);
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

  const headings = document.querySelectorAll("h2, h3");
  const navContainer = document.getElementsByClassName("doc-menu")[0];

  var h2List;

  headings.forEach((heading, index) => {
    if (heading.tagName == "H2") {
      const navItem = document.createElement("li");
      navItem.innerHTML = `<a class="scrollto" href="#${heading.textContent}">${heading.textContent}</a>`;

      navContainer.appendChild(navItem);
      h2List = undefined;
    } else if (heading.tagName == "H3") {
      if (!h2List) {
        h2List = document.createElement("ul");
        h2List.classList = "nav doc-sub-menu";
        navContainer.appendChild(h2List);
      }
      const navItem = document.createElement("li");
      navItem.innerHTML = `<a class="scrollto" href="#${heading.textContent}">${heading.textContent}</a>`;
      h2List.appendChild(navItem);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const hash = this.getAttribute("href");

      // Manually update the hash
      history.pushState(null, null, hash);

      // Optional: Add custom logic here for what should happen when a hash link is clicked
      scrollToElement(hash.substring(1).toLowerCase());
    });
  });

  const innerContainer = document.querySelector(".doc-inner");
  innerContainer.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("h2, h3");
    const navLinks = document.querySelectorAll('a[href^="#"]');

    let currentActiveIndex = -1;

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const offset = 200; // Adjust as needed based on your layout

      if (sectionTop - offset < 0) {
        currentActiveIndex = index;
      }
    });

    navLinks.forEach((link, index) => {
      if (index === currentActiveIndex) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
