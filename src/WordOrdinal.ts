import { convertNumbersToWords, convertTensToWords } from "./Cases";

const WordOrdinal = (number: number) => {
	const convertNumberToOrdinal = (number: number) => {
		let position: string;
		if (number > 90) return "Invalid range";
		if (number > 20 && number % 10 !== 0) {
			const firstPosition = convertTensToWords(Math.floor(number / 10) * 10);
			const secondPosition = `-${convertNumbersToWords(number % 10)}`;
			position = firstPosition + secondPosition;
		} else {
			position = convertNumbersToWords(number);
		}
		return position;
	};

	return convertNumberToOrdinal(number);
};

export default WordOrdinal;
