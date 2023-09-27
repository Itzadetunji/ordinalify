import { convertNumberToNumberOrdinal } from "./Cases";

interface WordOrdinalOptions {
	capitalize: boolean;
}

export type NumberOrdinalType = (
	number: number,
	options?: WordOrdinalOptions
) => string;

const NumberOrdinal: NumberOrdinalType = (number, options) => {
	return number <= 0
		? "Invalid range"
		: transformText(convertNumberToNumberOrdinal(number), options);
};

export default NumberOrdinal;

interface TextOptions {
	capitalize?: boolean;
	lowercase?: boolean;
	subscript?: boolean;
	superscript?: boolean;
}

type ResultTransformer = (text: string, options?: TextOptions) => string;

const transformText: ResultTransformer = (text, options) => {
	if (options) {
		if (options.capitalize) {
			text = text.toUpperCase();
		}

		if (options.lowercase) {
			text = text.toLowerCase();
		}

		if (options.subscript) {
			text = `<sub>${text}</sub>`;
		}

		if (options.superscript) {
			text = `<sup>${text}</sup>`;
		}
	}

	return text;
};
