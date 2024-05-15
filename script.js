function locoScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  var elems = document.querySelectorAll(".elem");
  var sec2 = document.querySelector(".section2");
  elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var bgimg = elem.getAttribute("data-img");
      sec2.style.backgroundImage = `url("${bgimg}")`;
    });
    elem.addEventListener("mouseleave", function () {
      // var bgimg = elem.getAttribute("data-img")
      sec2.style.transition = "background-image 0.8s ease";
      sec2.style.backgroundImage = "none";
    });
  });

  document.querySelector(".footer h2").addEventListener("click", function () {
    scroll.scrollTo(0);
  });
}
locoScroll();
function loader() {
  console.log("Loader function started");
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.2,
    duration: 0.5,
    ease: "expo.Out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.4,
      duration: 0.5,
      ease: "expo.Out",
    },
    "a"
  );
  tl.to(
    ".loader h1",
    {
      color: "#000000",
      delay: 0.4,
      duration: 0.5,
    },
    "a"
  );
  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}
loader();
