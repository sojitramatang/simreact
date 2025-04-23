# SimReact

SimReact is a React component library designed to provide reusable components for React-based applications. It is built using TypeScript and bundled with Rollup for efficient and optimized distribution.

## Installation

You can install SimReact via npm or yarn.

```bash
npm install simreact
```

or

```bash
yarn add simreact
```

## Usage

Once installed, you can import and use the components from the `simreact` library in your React application:

```js
import { MyComponent } from 'simreact';
```

### TypeScript Example

If you're using TypeScript, SimReact comes with type definitions out of the box. Here's an example of how you can use the library with TypeScript.

```tsx
import React from 'react';
import { MyComponent, MyComponentProps } from 'simreact';

const App: React.FC = () => {
  const props: MyComponentProps = {
    text: "Hello, SimReact!"
  };

  return (
    <div>
      <MyComponent {...props} />
    </div>
  );
}

export default App;
```

In this example:
- `MyComponentProps` is imported from `simreact` and used to type the props for the `MyComponent`.
- TypeScript will automatically infer types for the props passed to `MyComponent` based on the definitions provided in the library's type files.

### Importing Types Directly

You can also import types directly from `simreact` if you need to use them for type-checking or interfaces.

```ts
import { MyComponentProps } from 'simreact';

const myProps: MyComponentProps = {
  text: 'This is a typed prop example!'
};
```

## Development

To build the package, you can run the build script. This will bundle the components and prepare them for distribution.

```bash
npm run build
```

This command uses Rollup to bundle the library into both CommonJS and ES Module formats.

## File Structure

The library includes the following key files:

- `dist/index.js`: The CommonJS module version of the library.
- `dist/index.esm.js`: The ES Module version of the library.
- `dist/index.d.ts`: TypeScript type definitions.

## Scripts

- `build`: Builds the library using Rollup.
  ```bash
  npm run build
  ```

- `test`: Currently a placeholder with no actual tests.
  ```bash
  npm test
  ```

## Peer Dependencies

SimReact requires `react` and `react-dom` as peer dependencies. Ensure that these packages are installed in your project.

- `react`: ^19.1.0
- `react-dom`: ^19.1.0

## Development Dependencies

SimReact uses the following tools for development:

- **Babel**: For transpiling modern JavaScript and React JSX.
- **Rollup**: For bundling the components.
- **TypeScript**: For static type checking.
- **Terser**: For minifying the output bundle.

## License

This project is licensed under the ISC License.