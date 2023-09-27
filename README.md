# React Ordinals

[![npm version](https://img.shields.io/npm/v/react-switch.svg)](https://www.npmjs.com/package/react-ordinals)

[![license](https://img.shields.io/npm/l/react-switch.svg)](https://github.com/your-username/react-ordinals/blob/main/LICENSE)

React Ordinals is a package used to get number ordinals in react apps

## Installation

Install the package using npm:

```shell
npm install react-ordinals
```

Install the package using yarn:

```shell
yarn add react-ordinals
```

Install the package using bun:

```shell
bun add react-ordinals
```

## Usage

Here's a basic example of how to use `react-ordinals`:

Word Ordinals e.g("First", "Second", "Third", "Fourth"):

```jsx
import React from "react";
import { WordOrdinal } from "react-ordinals";

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

Number Ordinals e.g("1st", "2nd", "3rd", "4th"):

```jsx
import React from "react";
import { NumberOrdinal } from "react-ordinals";

const App = () => {
	const numberRange = Array.from({ length: 4 }, (_, index) => index + 1);
	return (
		<section>{numberRange.map((number) => NumberOrdinal(number))}</section>
	);
};

export default App;
```

## API

### WordOrdinal

The `WordOrdinal` component is responsible for converting numbers into their ordinal form.

**Props:**

- `number` (required): The number to be converted into an ordinal form.
- `capitalizeFirstLetter` (required): A boolean indicating whether the result should be in title case format

## Examples

### Example 1: Word Ordinal("first", "second", "third")

```jsx
import React from "react";
import { WordOrdinal } from "react-ordinals";

const App = () => {
	const numberRange = Array.from({ length: 3 }, (_, index) => index + 1);
	return <section>{numberRange.map((number) => WordOrdinal(number))}</section>;
};

export default App;
```

### Example 2: Number Ordinal("1ST", "2ND", "3RD")

```jsx
import React from "react";
import { NumberOrdinal } from "react-ordinals";

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
