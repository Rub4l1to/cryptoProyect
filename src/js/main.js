import { typed } from "./utils/index";
import { drawCards, printOptions, printInfo, printGraph } from "./functions/index";
import { getList } from "./querys/index";
import SlimSelect from "slim-select";
import { getCoins_List, getCoins_Single } from '../configs/urls'

export async function main() {
  printGraph();
}

// Events
window.onload = async () => {
  drawCards(await getList(getCoins_List));
  printOptions(await getList(getCoins_List));
  typed(await getList(getCoins_List));
  new SlimSelect({ select: "#coins" });
};

document.querySelector('.btn').onclick = async () => {
  const x = document.querySelector("#coins").value
  if (x === "XRP" || x === "Binance Coin") printInfo(await getList(getCoins_Single + x))
  if (x !== "") printInfo(await getList(getCoins_Single + x.toLowerCase()))
  window.scrollTo(0, 800)
}
