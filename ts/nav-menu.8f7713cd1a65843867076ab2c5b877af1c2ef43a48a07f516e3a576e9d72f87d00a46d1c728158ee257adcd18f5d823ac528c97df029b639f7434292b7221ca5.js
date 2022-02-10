(() => {
  // <stdin>
  var navButton = document.getElementById("nav-button");
  var navMenu = document.getElementById("nav-menu");
  var navMenuFrame = document.getElementById("nav-menu-frame");
  navButton.addEventListener("click", function() {
    navButton.classList.toggle("is-open");
    navButton.classList.toggle("is-closed");
    navMenu.classList.toggle("is-open");
    navMenuFrame.classList.toggle("is-open");
  });
})();
