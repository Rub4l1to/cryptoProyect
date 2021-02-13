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

export const drawOption = (id, name) => {
  let option = document.createElement("option")
  option.value = id;
  option.innerHTML = name;

  document.querySelector("#coins").appendChild(option);
};

export const drawInfo = (name, links, market_data) => {
  document.querySelector("#title-details").innerHTML = name
  document.querySelector(".section-details__price").innerHTML = market_data.current_price.eur.toFixed(2)
  document.querySelector("#subtitle-details").innerHTML = market_data.price_change_percentage_24h.toFixed(2)
  document.querySelector("#link").href = links.homepage[0]
}

export const drawSection = () => {

  // <section class="section-details ">
  //   <div class="row container">
  //       <div class="col-1-of-2 section-details__apart--1">
  //           <article class="section-details__info">
  //               <div class="section-details__title-container">
  //                   <div class="section-details__title">
  //                       <h3 class="heading-terciary--main" id="title-details"></h3>
  //                       <h3 class="heading-terciary--sub" id="subtitle-details"></h3>
  //                   </div>
  //                   <span class="section-details__line"></span>
  //               </div>
  //               <span class="section-details__price"></span>
  //               <a id="link" class="btn btn-submit--2" href="#" target="_blank">Conseguir monedas </a>
  //           </article>
  //       </div>
  //       <div class="col-1-of-2 section-details__apart--2">
  //           <div class="tooltip hidden"></div>
  //           <figure class="section-details__graph"></figure>
  //       </div>
  //   </div>
  // </section> 
}