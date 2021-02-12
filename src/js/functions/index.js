import { drawCard, drawOption, drawInfo } from "../models";
import { readArray, readDetails } from "../utils/checkers";

export const drawCards = (data) => readArray(data, drawCard);

export const printOptions = (data) => readArray(data, drawOption);

export const printInfo = (data) => readDetails(data, drawInfo)