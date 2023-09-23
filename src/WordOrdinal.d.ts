declare module "WordOrdinal" {
	import React from "react";

	interface WordOrdinalProps {
		number: number;
		shouldBeTitleCase: boolean;
	}

	const WordOrdinal: React.FC<WordOrdinalProps>;

	export default WordOrdinal;
}
