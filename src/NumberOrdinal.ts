import React from "react";
import { convertNumberToNumberOrdinal } from "./Cases";

const NumberOrdinal = (number: number, isUppercase: boolean) => {
	return convertNumberToNumberOrdinal(number, isUppercase);
};

export default NumberOrdinal;
