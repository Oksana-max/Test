window.addEventListener("click", (e) => {
  let counter;

  if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus") {
    counterWrapper = e.target.closest(".mainSlider__item");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (e.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }
  if (e.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});
