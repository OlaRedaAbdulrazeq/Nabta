export function createCard(cardData) {
  const figure = document.createElement("figure");
  figure.className = "d-flex flex-column justify-content-center align-items-center text-center position-relative";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "position-relative";
  imgWrapper.style.width = "17rem";

  const icon = document.createElement("i");
  icon.className = "bi bi-heart position-absolute ms-3 mt-3 fs-5";
  icon.style.cursor = "pointer";
  icon.addEventListener("click", () => {
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
  });

  const img = document.createElement("img");
  img.src = cardData.img;
  img.alt = "bouquet";
  img.className = "shadow w-100";
  img.style.borderRadius = "4rem";
  img.style.cursor = "pointer";
  img.loading = "lazy";
  
  imgWrapper.appendChild(icon);
  imgWrapper.appendChild(img);

  const caption = document.createElement("figcaption");
  caption.className = "pt-3";
  caption.innerHTML = `${cardData.name} <br> ${cardData.price} LE`;

  figure.appendChild(imgWrapper);
  figure.appendChild(caption);

  return figure;
}
