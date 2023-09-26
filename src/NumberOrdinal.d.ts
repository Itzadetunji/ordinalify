declare module "NumberOrdinal" {
	import React from "react";

	interface WordOrdinalProps {
		number: number;
		isUpperCase: boolean;
	}

	const NumberOrdinal: React.FC<WordOrdinalProps>;

	export default NumberOrdinal;
}
