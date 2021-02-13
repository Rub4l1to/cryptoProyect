import { drawCard, drawOption, drawInfo } from "../models";
import { readArray, readDetails } from "../utils/checkers";
import { call, LineGraph } from "../d3/index";

export const drawCards = (data) => readArray(data, drawCard);

export const printOptions = (data) => readArray(data, drawOption);

export const printInfo = (data) => readDetails(data, drawInfo)

export const printGraph = () => {
    call()
    LineGraph()
}