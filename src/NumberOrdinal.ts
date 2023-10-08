import { convertNumberToNumberOrdinal } from "./Cases";

export interface NumberOrdinalOptions {
	capitalize?: boolean;
	lowercase?: boolean;
	subscript?: boolean;
	superscript?: boolean;
}

export const NumberOrdinal = (
	number: number,
	options: NumberOrdinalOptions
) => {
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

		if (options.subscript) {
			const sub = text.slice(text.length - 2);
			const prefix = text.slice(0, text.length - 2);
			text = `${prefix}<sub>${sub}</sub>`;
		}

		if (options.superscript) {
			const sup = text.slice(text.length - 2);
			const newText = text.slice(0, text.length - 2);
			text = `${newText}<sup>${sup}</sup>`;
		}
	}

	return text;
};
