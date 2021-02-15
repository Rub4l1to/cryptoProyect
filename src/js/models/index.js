import { printGraph } from "../functions";

// Modelo de tarjeta
export const drawCard = (id, name, image, current_price) => {
  // Container padre
  let card__container = document.createElement("div");
  card__container.className = "card";

  // Container icono
  let card__img = document.createElement("figure");
  card__img.className = "card__picture";

  let img_selector = document.createElement("img");
  img_selector.className = "card__img";
  img_selector.src = image;
  card__img.append(img_selector);

  // Container info
  let card__info = document.createElement("div");
  card__info.className = "card__info";

  let h4 = document.createElement("h4");
  h4.className = "card__title";
  h4.innerHTML = name;
  card__info.append(h4);

  let span = document.createElement("span");
  span.className = "card__value";
  span.innerHTML = current_price + " USD";
  card__info.append(span);

  card__container.append(card__img);
  card__container.append(card__info);

  document.querySelector("#coins__container").appendChild(card__container);
};

// Modelo de opcion
export const drawOption = (id, name) => {
  let option = document.createElement("option");
  option.value = id;
  option.innerHTML = name;
  document.querySelector("#coins").appendChild(option);
};

// Modelo de section details
export const drawInfo = (name, links, market_data) => {
  const section_details = document.querySelector(".section-details");
  const title_details = document.querySelector("#title-details");
  const details_price = document.querySelector("#section-details__price");
  const percentage = document.querySelector("#subtitle-details__percentage");

  // Insertamos los valores en las capas
  section_details.className = "section-details show";
  title_details.innerHTML = name;
  details_price.innerHTML = `${market_data.current_price.usd.toFixed(0)} $`;
  percentage.innerHTML = `${market_data.price_change_percentage_24h.toFixed(2)} %`;
  document.querySelector("#link").href = links.homepage[0];

  // En caso de que el porcentaje sea positivo se pondra en verde o rojo
  if (market_data.price_change_percentage_24h.toFixed(2) > 0)
    percentage.className = "section-details__percentage--positive";
  else percentage.className = "section-details__percentage--negative";

  // Pintamos el gráfico
  printGraph();
  // Hacemos un scroll automatico
  window.scrollTo(0, 1000);
};