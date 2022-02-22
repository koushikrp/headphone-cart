const slider = document.querySelector(".price-range");
const selectedPrice = document.querySelector(".selected-price");

selectedPrice.innerHTML = slider.value;

slider.oninput = () => (selectedPrice.innerHTML = slider.value);
