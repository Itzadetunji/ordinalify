# Ordinalify

[![npm version](https://img.shields.io/npm/v/react-switch.svg)](https://www.npmjs.com/package/ordinalify)

[![license](https://img.shields.io/npm/l/react-switch.svg)](https://github.com/itzadetunji/ordinalify/blob/main/LICENSE)

Ordinalify is a package used to get number ordinals in javascript apps.

Ordinals: are grammatical or numerical indicators that express the position or order of items in a series, such as "1st" for first, "2nd" for second, and so on.

## Installation

Install the package using npm:

```shell
npm i ordinalify
```

Install the package using yarn:

```shell
yarn add ordinalify
```

Install the package using bun:

```shell
bun add ordinalify
```

## Usage

Here's a basic example of how to use `ordinalify`:

Word Ordinals e.g("First", "Second", "Third", "Fourth"):

```jsx
import React from "react";
import { WordOrdinal } from "ordinalify";

const App = () => {
	const numberRange = Array.from({ length: 4 }, (_, index) => index + 1);
	return (
		<section>
			{numberRange.map((number) =>
				WordOrdinal(number, { capitalizeFirstLetter: true })
			)}
		</section>
	);
};

export default App;
```

Number Ordinals e.g ("1st", "2nd", "3rd", "4th"):

```jsx
import React from "react";
import { NumberOrdinal } from "ordinalify";

const App = () => {
	const numberRange = Array.from({ length: 4 }, (_, index) => index + 1);
	return (
		<section>{numberRange.map((number) => NumberOrdinal(number))}</section>
	);
};

export default App;
```

## API (Parameters)

### WordOrdinal

The `WordOrdinal` function is responsible for converting numbers into their ordinal form in word form e.g "Fifth", "Twenty-Nine".

**Props:**

- `number` (required): The number to be converted into an ordinal form.
- `capitalizeFirstLetter` (required): A boolean indicating whether the result should be in title case format

### Example: Word Ordinal("first", "second", "third")

```jsx
import React from "react";
import { WordOrdinal } from "ordinalify";

const App = () => {
	const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
	return <section>{numberRange.map((number) => WordOrdinal(number))}</section>;
};

export default App;
```

### NumberOrdinal

The `NumberOrdinal` function is responsible for converting numbers into their ordinal form in number form e.g "5TH", "29TH".

### Example: Number Ordinal ("1ST", "2ND", "3RD")

```jsx
import React from "react";
import { NumberOrdinal } from "ordinalify";

const App = () => {
	const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
	return (
		<section>
			{numberRange.map((number) => NumberOrdinal(number, { capitalize: true }))}
		</section>
	);
};

export default App;
```


## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
