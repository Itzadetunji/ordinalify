import React from "react";
import {
	WordOrdinal as WordOrdinalFn,
	WordOrdinalOptions,
} from "../WordOrdinal";

export type WordOrdinalType = {
	number: number;
	options?: WordOrdinalOptions;
};

const WordOrdinal: React.FC<WordOrdinalType> = ({ number, options }) => {
	return <span>{WordOrdinalFn(number, options)}</span>;
};

export default WordOrdinal;
