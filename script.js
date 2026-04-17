const cards = document.querySelectorAll(".stone-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Dolomite View " + (index + 1);
  });
});
