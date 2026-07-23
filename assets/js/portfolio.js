document.querySelectorAll(".image-carousel").forEach((carousel) => {
  const radios = [...carousel.querySelectorAll('input[type="radio"]')];
  const slides = [...carousel.querySelectorAll(".carousel__slide")];
  const controls = [...carousel.querySelectorAll("[data-carousel-target]")];

  const update = () => {
    const activeIndex = radios.findIndex((radio) => radio.checked);

    slides.forEach((slide, index) => {
      slide.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
    });

    controls.forEach((control) => {
      const targetIndex = radios.findIndex((radio) => radio.id === control.dataset.carouselTarget);
      if (control.closest(".carousel__dots")) {
        control.setAttribute("aria-current", targetIndex === activeIndex ? "true" : "false");
      }
    });
  };

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const target = carousel.querySelector(`#${control.dataset.carouselTarget}`);
      if (target) {
        target.checked = true;
        update();
      }
    });
  });

  update();
});
