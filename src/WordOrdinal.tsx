import React from "react";
import { convertNumbersToWords, convertTensToTensFirstPosition } from "./Cases";

interface WordOrdinalProps {
	number: number;
	shouldBeTitleCase: boolean;
}

const WordOrdinal: React.FC<WordOrdinalProps> = ({
	number,
	shouldBeTitleCase,
}) => {
	const positionParser: (
		number: number,
		shouldBeTitleCase: boolean
	) => string = (number, shouldBeTitleCase) => {
		let position: string;

		const subPositionParser: (
			number: number,
			shouldBeTitleCase: boolean
		) => string = (number, shouldBeTitleCase) => {
			let subPosition: string;
			subPosition = convertTensToTensFirstPosition(number, subPosition);
			return shouldBeTitleCase ? toTitleCase(subPosition) : subPosition;
		};

		if (number > 20 && !number.toString().endsWith("0")) {
			const firstPosition = subPositionParser(
				+(number.toString().split("")[0] + "0"),
				shouldBeTitleCase
			);
			const secondPosition =
				"-" +
				positionParser(+number.toString().split("")[1], shouldBeTitleCase);
			const newPosition = (firstPosition + secondPosition).toString();
			return newPosition;
		}
		position = convertNumbersToWords(number, position);
		return shouldBeTitleCase ? toTitleCase(position) : position;
	};
	return <span>{positionParser(number, shouldBeTitleCase)}</span>;
};

export default WordOrdinal;

const toTitleCase = (string: string) => {
	return string
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};
