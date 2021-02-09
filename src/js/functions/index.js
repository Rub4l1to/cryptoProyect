export const drawCards = (data) => {
  data.map((item) => {
    const { name, image, current_price } = item;
    drawCard(name, image, current_price);
  });
};

export const drawCard = (title, img, value) => {
  // Container padre
  let card__container = document.createElement("div");
  card__container.className = "card";

  // Container icono
  let card__img = document.createElement("div");
  card__img.className = "card__img";

  let img_selector = document.createElement("img");
  img_selector.src = img;
  card__img.append(img_selector);

  // Container info
  let card__info = document.createElement("div");
  card__info.className = "card__info";

  let h4 = document.createElement("h4");
  h4.className = "card__title";
  h4.innerHTML = title;
  card__info.append(h4);

  let span = document.createElement("span");
  span.className = "card__value";
  span.innerHTML = value + " USD";
  card__info.append(span);

  card__container.append(card__img);
  card__container.append(card__info);

  document.querySelector("#coins__container").appendChild(card__container);
};
