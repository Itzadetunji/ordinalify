import React from "react";
import { convertNumberToNumberOrdinal } from "./Cases";

interface NumberOrdinalProps {
	number: number;
	isUppercase: boolean;
}

const NumberOrdinal: React.FC<NumberOrdinalProps> = ({
	number,
	isUppercase,
}) => {
	return <span>{convertNumberToNumberOrdinal(number, isUppercase)}</span>;
};

export default NumberOrdinal;
