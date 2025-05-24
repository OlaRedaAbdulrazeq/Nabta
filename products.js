import { card } from './data.js';
import { createCard } from './modules/card.js';
import { loadNavbar } from './modules/navbar.js';
import { loadFooter } from './modules/footer.js';

document.addEventListener("DOMContentLoaded", async () => {
  await loadNavbar();
  await loadFooter();

  const cardCollection = document.getElementById("cardCollection");
  card.forEach(element => {
    const oneCard = createCard(element);
    cardCollection.appendChild(oneCard);
  });
});
