import { convertNumberToNumberOrdinal } from "./Cases";

export interface NumberOrdinalOptions {
	capitalize?: boolean;
	lowercase?: boolean;
	subscript?: boolean;
	superscript?: boolean;
}

export type NumberOrdinalType = (
	number: number,
	options?: NumberOrdinalOptions
) => string;

export const NumberOrdinal: NumberOrdinalType = (number, options) => {
	return number <= 0
		? "Invalid range"
		: transformText(convertNumberToNumberOrdinal(number), options);
};

export default NumberOrdinal;

type ResultTransformer = (
	text: string,
	options?: NumberOrdinalOptions
) => string;

const transformText: ResultTransformer = (text, options) => {
	if (options) {
		if (options.capitalize) {
			text = text.toUpperCase();
		}

		if (options.lowercase) {
			text = text.toLowerCase();
		}
	}

	return text;
};
