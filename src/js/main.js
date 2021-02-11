import { typed } from "./utils/index";
import { drawCards, printOptions } from "./functions/index";
import { getList } from "./querys/index";
import { call, LineGraph } from "./d3/index";
import SlimSelect from "slim-select";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false";



export async function main() {
  call()
  LineGraph()
}

// Events
window.onload = async () => {
  drawCards(await getList(url));
  printOptions(await getList(url));
  typed(await getList(url));
  new SlimSelect({ select: "#coins" });
};
