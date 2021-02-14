// General imports
import SlimSelect from "slim-select";

// Functional imports
import { typed } from "./utils/index";
import { drawCards, printOptions, printInfo } from "./functions/index";
import { getList } from "./querys/index";
import { getCoins_List, getCoins_Single } from '../configs/urls';

export async function main() {}

// Events
window.onload = async () => {
  // Hacemos la petición y pintamos las tarjetas
  drawCards(await getList(getCoins_List));
  // Hacemos la petición y pintamos las opciones
  printOptions(await getList(getCoins_List));
  // Hacemos la petición y pintamos las monedas con typed
  typed(await getList(getCoins_List));
  // Seleccion del select que utilizará typed
  new SlimSelect({ select: "#coins" });
};

document.querySelector('.btn').addEventListener("click", async () => {
  const x = document.querySelector("#coins").value
  // Si selecciona alguna opción realizará un petición de los detalles de la moneda
  if (x !== "") printInfo(await getList(getCoins_Single + x.toLowerCase()))
})
