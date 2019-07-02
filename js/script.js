var linkletter = document.querySelector(".contacts-about-us-link");
var letter = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");

linkletter.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter.classList.remove("modal-show");
});


// var linkbuy = document.querySelector(".hover-cart");
// var buy = document.querySelector(".modal-next-actions");
// var close = document.querySelector(".modal-close");
//
// linkbuy.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   buy.classList.add("modal-show");
// });
//
// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   buy.classList.remove("modal-show");
// });


  var linkmap = document.querySelector(".modal-map-btn");
  var map = document.querySelector(".modal-map");
  var closemap = map.querySelector(".modal-close");

  linkmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
  });

  closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (map.classList.contains("modal-show")) {
        evt.preventDefault();
        map.classList.remove("modal-show");
      }
    }
  });
