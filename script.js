//this function will run as soon as the page load

const updateDots = () => {
  const screenWidth = window.innerWidth;
  const dotCotainer = document.querySelector(".dot-container");
  dotCotainer.innerHTML = "";
  if (screenWidth >= 1150) {
    for (let i = 0; i < 2; i++) {
      const span = document.createElement("span");
      span.classList.add("dot");
      const dotCotainer = document.querySelector(".dot-container");
      dotCotainer.appendChild(span);
    }
  } else if (screenWidth >= 750 && screenWidth < 1150) {
    for (let i = 0; i < 3; i++) {
      const span = document.createElement("span");
      span.classList.add("dot");
      const dotCotainer = document.querySelector(".dot-container");
      dotCotainer.appendChild(span);
    }
  } else {
    for (let i = 0; i < 6; i++) {
      const span = document.createElement("span");
      span.classList.add("dot");
      const dotCotainer = document.querySelector(".dot-container");
      console.log(dotCotainer);
      dotCotainer.appendChild(span);
    }
  }

  // Make the first dot selected initially
  const dotElements = document.querySelectorAll(".dot");
  if (dotElements.length > 0) {
    dotElements[0].classList.add("selected");
  }

  const width = document
    .querySelector(".testimonial-main")
    .getBoundingClientRect().width;
  //add eventListner to move scroll left and add a select class
  dotElements.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      dotElements.forEach((dot) => dot.classList.remove("selected"));

      dot.classList.add("selected");

      document.querySelector(".testimonial-main").scrollTo({
        left: width * i,
        behavior: "smooth",
      });
    });
  });

  // Handle scroll event to update the selected dot based on which section is visible
  document.querySelector(".testimonial-main").addEventListener("scroll", () => {
    dotElements.forEach((dot, i) => {
      const scrollLeft = document.querySelector(".testimonial-main").scrollLeft;
      const index = Math.round(scrollLeft / width); // Calculate which section is visible
      dot.classList.remove("selected");
      if (i === index) {
        dot.classList.add("selected");
      }
    });
  });
};

//scroll up fucntion
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//scroll up show
window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector(".scroll-up");
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

const menu = document.querySelector(".menu-mobile-list");
const desktopMenu = document.querySelector(".menu-desktop-list");
const mobileMenuIcon = document.querySelector(".mobile-menu");
const openMenu = () => {
  menu.style.right = "0px";
};

const closeMenu = () => {
  menu.style.right = "-600px";
};

const mediaQuery = window.matchMedia("(max-width:915px)");
mediaQuery.addEventListener("change", () => {
  if (mediaQuery.matches) {
    // menu.style.display = "flex";
    desktopMenu.style.display = "none";
    menu.style.right = "-600px";
    mobileMenuIcon.style.display = "flex";
  } else {
    menu.style.right = "-600px";
    desktopMenu.style.display = "flex";
    mobileMenuIcon.style.display = "none";
  }
});

//loader
const loader = () => {
  const loaderContainer = document.createElement("div");
  const loaderElement = document.createElement("div");
  loaderContainer.classList.add("loaderContainer");
  loaderElement.classList.add("loaderElement");
  const element = document.querySelector(".container");
  element.appendChild(loaderContainer);
  loaderContainer.appendChild(loaderElement);
};

window.onload = () => {
  //anonymus function for
  (function () {
    loader(); //show loader
    const loaderContainer = document.querySelector(".loaderContainer");
    setTimeout(() => (loaderContainer.style.display = "none"), 500);
  })();

  updateDots();
};

window.addEventListener("resize", updateDots);
