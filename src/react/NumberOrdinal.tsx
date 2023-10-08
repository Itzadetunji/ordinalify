import React from "react";
import {
	NumberOrdinal as NumberOrdinalFn,
	NumberOrdinalOptions,
} from "../NumberOrdinal";

export type NumberOrdinalType = {
	number: number;
	options?: NumberOrdinalOptions;
};

const NumberOrdinal: React.FC<NumberOrdinalType> = ({ number, options }) => {
	return <span>{NumberOrdinalFn(number, options)}</span>;
};

export default NumberOrdinal;
