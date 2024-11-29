//this function will run as soon as the page load

window.onload = function () {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1150) {
    for (let i = 0; i < 2; i++) {
      const span = document.createElement("span");
      span.classList.add("dot");
      const dotCotainer = document.querySelector(".dot-container");
      console.log(dotCotainer);
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
