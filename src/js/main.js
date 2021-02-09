import { typed } from "./utils/index";
import { drawCards } from "./functions/index";
import { getList } from "./querys/index";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false";

export async function main() {}

// Events
window.onload = async () => {
  drawCards(await getList(url));

  typed(await getList(url));
};
