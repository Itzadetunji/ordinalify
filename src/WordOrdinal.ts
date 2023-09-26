import { convertNumbersToWords, convertTensToWords } from "./Cases";

const WordOrdinal = (number: number, isTitlecase: boolean) => {
	const convertNumberToOrdinal = (
		number: number,
		shouldBeTitleCase: boolean
	) => {
		let position: string;
		if (number > 90) return "Invalid range";
		if (number > 20 && number % 10 !== 0) {
			const firstPosition = convertTensToWords(Math.floor(number / 10) * 10);
			const secondPosition = `-${convertNumbersToWords(number % 10)}`;
			position = firstPosition + secondPosition;
		} else {
			position = convertNumbersToWords(number);
		}
		return shouldBeTitleCase ? toTitleCase(position) : position;
	};

	return convertNumberToOrdinal(number, isTitlecase);
};

const toTitleCase = (string: string) => {
	return string
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};

export default WordOrdinal;
