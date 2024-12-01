//this function will run as soon as the page load

const updateDots = () => {
  const screenWidth = window.innerWidth;
  const dotContainer = document.querySelector(".dot-container");
  dotContainer.innerHTML = ""; // Clear existing dots

  let numDots;
  if (screenWidth >= 1150) {
    numDots = 2;
  } else if (screenWidth >= 750) {
    numDots = 3;
  } else {
    numDots = 6;
  }

  // Create dots
  for (let i = 0; i < numDots; i++) {
    const span = document.createElement("span");
    span.classList.add("dot");
    dotContainer.appendChild(span);
  }

  // Make the first dot selected initially
  const dotElements = document.querySelectorAll(".dot");
  if (dotElements.length > 0) {
    dotElements[0].classList.add("dot-selected");
  }

  const width = document
    .querySelector(".testimonial-main")
    .getBoundingClientRect().width;
  //add eventListner to move scroll left and add a select class
  dotElements.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      dotElements.forEach((dot) => dot.classList.remove("dot-selected"));

      dot.classList.add("dot-selected");

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
      dot.classList.remove("dot-selected");
      if (i === index) {
        dot.classList.add("dot-selected");
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

const mediaQuery = window.matchMedia("(max-width:1000px)");
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

//selected item
const checkLocation = () => {
  const location = window.location.pathname;
  const elements = document.querySelectorAll(".navbar a");
  elements.forEach((item) => {
    const linkPath = item.pathname;
    if (location === linkPath) {
      const liElement = item.querySelector("li");
      liElement.classList.add("selected");
    }
  });
};
//this is for car animation to work on specific scroll
const element = document.querySelector(".profile-pic");

const scrollEvent = () => {
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;
  if (scrollPosition >= elementPosition - window.innerHeight) {
    setTimeout(() => {
      element.style.animation = "carAnimation 2s ease ";
    }, 500);
  }
};

// function to get parameter value
const getParam = (param) => {
  const urlParam = new URLSearchParams(window.location.search); // this will give us object of urlsearchparam
  return urlParam.get(param); // this will give us value based on passed param
};

window.onload = () => {
  //anonymus function for
  (function () {
    loader(); //show loader
    checkLocation();
    const loaderContainer = document.querySelector(".loaderContainer");
    setTimeout(() => (loaderContainer.style.display = "none"), 150);
  })();
  if (window.location.pathname === "/midcity2/index.html") {
    updateDots();
  }

  if (window.location.pathname === "/midcity2/contactUs.html") {
    const result = getParam("message_sent");
    if (result) {
      alert("Message Sent Successfully");
    } else {
      return;
    }
  }
};

if (window.location.pathname === "/midcity2/index.html") {
  window.addEventListener("resize", updateDots);
}

if (window.location.pathname === "/midcity2/wofChecks.html") {
  window.addEventListener("scroll", scrollEvent);
}
