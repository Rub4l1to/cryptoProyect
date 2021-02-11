import { drawCard, drawOption } from "../models";
import { readArray } from "../utils/checkers";

export const drawCards = (data) => readArray(data, drawCard);

export const printOptions = (data) => readArray(data, drawOption);

