import { convertNumberToNumberOrdinal } from "./Cases";

export interface NumberOrdinalProps {
	number: number;
}

const NumberOrdinal = ({ number }: NumberOrdinalProps) => {
	return convertNumberToNumberOrdinal(number);
};

export default NumberOrdinal;
