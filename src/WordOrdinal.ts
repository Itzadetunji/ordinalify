import {
	convertNumbersToWords,
	convertTensToWords,
	firstWordToTitle,
} from "./Cases";

export interface WordOrdinalOptions {
	capitalizeFirstLetter: boolean;
}

export type WordOrdinalType = (
	number: number,
	options?: WordOrdinalOptions
) => string;

export const WordOrdinal: WordOrdinalType = (number, options) => {
	const convertNumberToOrdinal = (number: number) => {
		let position: string;
		if (number === 100) {
			return firstWordToTitle("one-hundredth", "-");
		} else if (number > 100 || number <= 0) {
			return "Invalid range";
		}

		if (number > 20 && number % 10 !== 0) {
			const firstPosition = convertTensToWords(Math.floor(number / 10) * 10);
			const secondPosition = `-${convertNumbersToWords(number % 10)}`;
			position = firstPosition + secondPosition;
		} else {
			position = convertNumbersToWords(number);
		}
		return position;
	};

	return options?.capitalizeFirstLetter
		? firstWordToTitle(convertNumberToOrdinal(number))
		: convertNumberToOrdinal(number);
};

export default WordOrdinal;
