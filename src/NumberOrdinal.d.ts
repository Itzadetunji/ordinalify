declare module "NumberOrdinal" {
	interface NumberOrdinalProps {
		number: number;
	}

	const NumberOrdinal: (props: NumberOrdinalProps) => string;

	export default NumberOrdinal;
}
