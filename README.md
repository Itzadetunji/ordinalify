# Ordinalify

[![npm version](https://img.shields.io/npm/v/react-switch.svg)](https://www.npmjs.com/package/ordinalify)

[![license](https://img.shields.io/npm/l/react-switch.svg)](https://github.com/itzadetunji/ordinalify/blob/main/LICENSE)

Ordinalify is a package used to get number ordinals in javascript apps.

Ordinals: are grammatical or numerical indicators that express the position or order of items in a series, such as "1st" for first, "2nd" for second, and so on.

## Installation

Install the package using npm:

```shell
npm install ordinalify
```

Install the package using yarn:

```shell
yarn add ordinalify
```

## Usage

Here's a basic example of how to use `ordinalify`:

Word Ordinals e.g("First", "Second", "Third", "Fourth"):

```javascript
import { WordOrdinal } from "ordinalify";

const numberRange = Array.from({ length: 4 }, (_, index) => index + 1);

numberRange.map((number) =>
	console.log(WordOrdinal(number, { capitalizeFirstLetter: true }))
);
```

Number Ordinals e.g ("1ST", "2ND", "3RD", "4TH"):

```javascript
import { NumberOrdinal } from "ordinalify";

const numberRange = Array.from({ length: 4 }, (_, index) => index + 1);

numberRange.map((number) =>
	console.log(NumberOrdinal(number, { capitalize: true }))
);
```

## API (Parameters)

### WordOrdinal

The `WordOrdinal` function/component is responsible for converting numbers into their ordinal form in word form e.g "Fifth", "Twenty-Nine".

**Props:**

- `number` (required): The number to be converted into an ordinal form.
- `options` (optional): An object containing the following properties:
  - `capitalizeFirstLetter` (optional): A boolean indicating whether the result should be in title case format. This can be used as the second parameter using node or the second prop with the name options and the key value name "capitalizeFirstLetter"

### Example: Word Ordinal("first", "second", "third")

In Node:

```javascript
const { WordOrdinal } = require("ordinalify");

const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
numberRange.map((number) => console.log(WordOrdinal(number)));
```

In React:

```jsx
import React from "react";
import { WordOrdinal } from "ordinalify/dist/react";

const App = () => {
	const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
	return (
		<section>
			{numberRange.map((number, index) => (
				<WordOrdinal
					key={index}
					number={number}
					options={{ capitalizeFirstLetter: true }}
				/>
			))}
		</section>
	);
};

export default App;
```

### NumberOrdinal

The `NumberOrdinal` function/component is responsible for converting numbers into their ordinal form in number form e.g "5TH", "29TH".

**Props:**

- `number` (required): The number to be converted into an ordinal form.
- `options` (optional): An object containing the following properties:
  - `capitalize` (optional): A boolean indicating whether the result should be in title case format. This can be used as the second parameter using node or the second prop with the name options and the key value name "capitalizeFirstLetter"
  - `lowercase` (optional): A boolean indicating whether the result should be in lowercase format.
  - `subscript` (optional): A boolean indicating whether the result should be in subscript format. (Note: Subscript does not work in Node environment)
  - `superscript` (optional): A boolean indicating whether the result should be in superscript format. (Note: Superscript does not work in Node environment)

### Example: Number Ordinal ("1ST", "2ND", "3RD")

In Node

```javascript
const { NumberOrdinal } = require("ordinalify");

const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
numberRange.map((number) =>
	console.log(NumberOrdinal(number, { capitalize: true }))
);
```

In React

```jsx
import React from "react";
import { NumberOrdinal } from "ordinalify/dist/react";

const App = () => {
	const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
	return (
		<section>
			{numberRange.map((number) => (
				<NumberOrdinal
					number={number}
					options={{ capitalize: true }}
				/>
			))}
		</section>
	);
};

export default App;
```

## Contributing

This Markdown document is well-structured and provides clear instructions for using the `ordinalify` package. If you have any specific concerns or requests, feel free to let me know!
