import { typed } from "./utils/index";
import { drawCards, printOptions, printInfo } from "./functions/index";
import { getList } from "./querys/index";
import { call, LineGraph } from "./d3/index";
import SlimSelect from "slim-select";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false";

const url2 = 
"https://api.coingecko.com/api/v3/coins/"

export async function main() {}

// Events
window.onload = async () => {
  drawCards(await getList(url));
  printOptions(await getList(url));
  typed(await getList(url));
  new SlimSelect({ select: "#coins" });
};


document.querySelector('.btn').onclick = async () => {
  
  const x = document.querySelector("#coins").value

  if(x === "XRP" || x === "Binance Coin") {
    printInfo(await getList(url2 + x))
  } else {
    printInfo(await getList(url2 + x.toLowerCase()))
  }
  

  window.scrollTo(0,800)
  call()
  LineGraph()
}
