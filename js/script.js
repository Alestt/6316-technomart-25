var linkletter = document.querySelector(".contacts-about-us-link");
var letter = document.querySelector(".modal-write-us");
var closeletter = letter.querySelector(".modal-close");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("myemail");
  } catch (err) {
    isStorageSupport = false;
  }
var myname = letter.querySelector(".write-us-name");
var myemail = letter.querySelector(".write-us-email");
var myletter = letter.querySelector(".write-us-letter");
letter.addEventListener("submit", function (evt) {
    if (!myname.value || !myemail.value || !myletter.value) {
      evt.preventDefault();
      letter.classList.remove("modal-error");
      letter.offsetWidth = letter.offsetWidth;
      letter.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("myemail", myemail.value);
      }
    }
  });


linkletter.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter.classList.add("modal-show");
  if (storage) {
      myemail.value = storage;
    }
  myname.focus();
});

closeletter.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter.classList.remove("modal-show");
  letter.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (letter.classList.contains("modal-show")) {
        letter.classList.remove("modal-show");
        letter.classList.remove("modal-error");
      }
    }
  });


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




  var linkbuy = document.querySelector(".hover-cart");
  var buy = document.querySelector(".modal-next-actions");
  var closebuy = buy.querySelector(".modal-close");

  linkbuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    buy.classList.add("modal-show");
  });

  closebuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    buy.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (buy.classList.contains("modal-show")) {
        evt.preventDefault();
        buy.classList.remove("modal-show");
      }
    }
  });
