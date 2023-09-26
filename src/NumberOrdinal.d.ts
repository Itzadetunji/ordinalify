import { NumberOrdinalProps } from "./NumberOrdinal";

declare module "NumberOrdinal" {
	const NumberOrdinal: (props: NumberOrdinalProps) => string;

	export default NumberOrdinal;
}
