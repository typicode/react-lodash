# react-lodash [![build status](https://travis-ci.com/typicode/react-lodash.svg?branch=master)](https://travis-ci.com/typicode/react-lodash) [![npm](https://img.shields.io/npm/v/react-lodash.svg)](https://www.npmjs.com/package/react-lodash)

> Use any lodash function as a React component

## Example

### Without

```jsx
import react from 'react'

array && array.length ? (
  <ul>
    {array.map(i => (
      <li key={i}>{i}</li>
    ))}
  </ul>
) : (
  'Empty list'
)
```

### With

The example below uses lodash [isEmpty](https://lodash.com/docs/4.17.10#isEmpty) and [map](https://lodash.com/docs/4.17.10#isEmpty) as components.

```jsx
import react from 'react'
import { IsEmpty, Map } from "react-lodash"

<IsEmpty
  value={array}
  yes="Empty list"
  no={() => (
    <ul>
      <Map collection={array} iteratee={i => <li key={i}>{i}</li>} />
    </ul>
  )}
/>
```

## Install

```sh
npm install react-lodash
```

<a href="https://www.patreon.com/typicode">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## API

react-lodash uses lodash documentation for prop names.

For example, let's say you want to use [`_.get`](https://lodash.com/docs/4.17.10#get). Based on lodash documentation, it takes an `object` and `path` arguments, so `<Get />` will have the same props.

```jsx
const object = {
  a: {
    b: { 1 }
  }
}

const path = 'a.b'

// lodash
_.get(object, path)

// react-lodash
<Get object={object} path={path} />
```

Also every react-lodash component accepts a `children` render prop:

```jsx
<Get object={object} path={path}>
  {value => <UpperCase string={value} />}
</Get>
```

For lodash functions that return a boolean, react-lodash components accept `yes` and `no` render props:

```jsx
<IsEmpty
  value={array}
  yes={() => <p>empty</p>}
  no={() => <p>not empty</p>}
/>
```

## Available components

See [components.md](components.md) to view all available components (296).

See [lodash](https://lodash.com/docs/4.17.10) documentation for prop names.

## License

MIT

[Patreon](https://www.patreon.com/typicode) - [Supporters](https://thanks.typicode.com) ✨
