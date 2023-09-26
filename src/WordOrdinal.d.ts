declare module "WordOrdinal" {
	interface WordOrdinalProps {
		number: number;
	}

	const WordOrdinal: (props: WordOrdinalProps) => string;

	export default WordOrdinal;
}
