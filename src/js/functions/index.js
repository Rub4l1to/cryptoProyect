import { drawCard, drawOption, drawInfo } from "../models";
import { readArray, readDetails } from "../utils/checkers";
import { call, LineGraph } from "../d3/index";

// Recibe los datos y los envia al modelo para pintarlo
export const drawCards = (data) => readArray(data, drawCard);

// Recibe los datos y envia las opciones al modelo para pintarlo
export const printOptions = (data) => readArray(data, drawOption);

// Recibe los datos y los envia al modelo para pintarlo
export const printInfo = (data) => readDetails(data, drawInfo)

// Llamada a la funciones del gráfico
export const printGraph = () => {
    call()
    LineGraph()
}