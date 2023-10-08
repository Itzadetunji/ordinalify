import React from "react";
import {
	NumberOrdinal as NumberOrdinalFn,
	NumberOrdinalOptions,
} from "../NumberOrdinal";

export type NumberOrdinalType = {
	number: number;
	options?: {
		capitalize?: boolean;
		lowercase?: boolean;
		subscript?: boolean;
		superscript?: boolean;
	};
};

const NumberOrdinal: React.FC<NumberOrdinalType> = ({ number, options }) => {
	const isSubScript = (text: string) => {
		const sub = text.slice(text.length - 2);
		const prefix = text.slice(0, text.length - 2);

		return (
			<>
				{prefix}
				<sub>{sub}</sub>
			</>
		);
	};

	const isSuperScript = (text: string) => {
		const sup = text.slice(text.length - 2);
		const newText = text.slice(0, text.length - 2);
		text = `${newText}<sup>${sup}</sup>`;
		return (
			<>
				{newText}
				<sup>{sup}</sup>
			</>
		);
	};

	if (options.subscript) {
		const text = NumberOrdinalFn(number, options);
		return <span>{isSubScript(text)}</span>;
	}
	if (options.superscript) {
		const text = NumberOrdinalFn(number, options);
		return <span>{isSuperScript(text)}</span>;
	}

	return <span>{NumberOrdinalFn(number, options)}</span>;
};

export default NumberOrdinal;
