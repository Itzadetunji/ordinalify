declare module "NumberOrdinal" {
	interface NumberOrdinalProps {
			number: number;
			isUpperCase: boolean;
	}

	const NumberOrdinal: (props: NumberOrdinalProps) => string;

	export default NumberOrdinal;
}