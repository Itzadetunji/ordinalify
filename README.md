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

```jsx
import React from "react";
import { WordOrdinal } from "react-ordinals";

const App = () => {
  const numberRange = Array.from({length: 50}, (_, index) => index + 1);
  return (
    <section>
      {numberRange.map((number) => (
        <WordOrdinal
          number={number}
          shouldBeTitleCase={true}
        />  
      ))}
    </section>
  );
};

export default App;
```

## API

### WordOrdinal

The `WordOrdinal` component is responsible for converting numbers into their ordinal form. 

**Props:**

- `number` (required): The number to be converted into an ordinal form.
- `shouldBeTitleCase` (required): A boolean indicating whether the result should be in title 

## Examples

### Example 1: Word Ordinal

```jsx
const App = () => {
  return (
    <section>
      <WordOrdinal
        number={14}
        shouldBeTitleCase={false}
      />  
    </section>
  );
};
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
