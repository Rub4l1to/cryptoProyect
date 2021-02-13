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

  // const section_details = document.createElement("section");
  // section_details.className = "section-details";

  // const row = document.createElement("div");
  // row.className = "row container";

  // const apart_1 = document.createElement("div");
  // apart_1.className = "col-1-of-2 section-details__apart--1";

  // const info = document.createElement("div");
  // info.className = "section-details__info";
  
  // const title_container = document.createElement("div");
  // title_container.className = "section-details__title-container";

  // const title_details = document.createElement("h3");
  // title_details.className = "heading-terciary--main";
  // title_details.innerHTML = `${name}`;

  // const line =  document.createElement("span");
  // line.className = "section-details__line";

  // title_container.appendChild(title_details);
  // title_container.appendChild(line)

  // const row2 = document.createElement("div");
  // row2.className = "row-row container";

  // const col_1 = document.createElement("div");
  // col_1.className = "col-1-of-2 ";

  // const price_container = document.createElement("div");
  // price_container.className = "section-details__price-container";
  // price_container.innerHTML = "Price";

  // const price_header = document.createElement("p");
  // price_header.className = "heading-terciary--sub";

  // const price_sub = document.createElement("span");
  // price_sub.className = "section-details__price";
  // price_sub.innerHTML = `${market_data.current_price.eur.toFixed(2)} $`;

  // price_container.appendChild(price_header);
  // price_container.appendChild(price_sub);
  // col_1.appendChild(price_container);
  // row.appendChild(col_1)

  // const col_2 = document.createElement("div");
  // col_2.className = "col-1-of-2 ";
  
  // console.log(row)


  // document.querySelector("main").appendChild(section_details);

//   document.querySelector(".section-details__price").innerHTML = 
//   document.querySelector("#subtitle-details").innerHTML = market_data.price_change_percentage_24h.toFixed(2)
//   document.querySelector("#link").href = links.homepage[0]
// }

}

  // <section class="section-details ">
  //           <div class="row container">
  //               <div class="col-1-of-2 section-details__apart--1">
  //                   <article class="section-details__info">
  //                       <div class="section-details__title-container">
  //                           <h3 class="heading-terciary--main" id="title-details"></h3>
  //                           <span class="section-details__line"></span>
  //                       </div>


  //                       <div class="row--row container">
  //                           <div class="col-1-of-2">
  //                               <div class="section-details__price-container">
  //                                   <h5 class="section-details__value">Price</h5>
  //                                   <p class="heading-terciary--sub"><span class="section-details__price "></span> $</p>
  //                               </div>
  //                           </div>
  //                           <div class="col-1-of-2">
  //                               <div class="section-details__percentage-container">
  //                                   <h5 class="section-details__value">Variation</h5>
  //                                   <p class="heading-terciary--sub section-details__percentage--positive"><span id="subtitle-details"></span> %</p>
  //                               </div>
  //                           </div>
  //                       </div>
  //                       <a id="link" class="btn btn-submit--2" href="#" target="_blank">Conseguir monedas </a>
  //                   </article>
  //               </div>
  //               <div class="col-1-of-2 section-details__apart--2">
  //                   <div class="tooltip hidden"></div>
  //                   <figure class="section-details__graph"></figure>
  //               </div>
  //           </div>
  //       </section>
  
