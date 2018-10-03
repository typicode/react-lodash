# react-lodash

[![npm](https://img.shields.io/npm/v/react-lodash.svg)](https://www.npmjs.com/package/react-lodash)

> Lodash as React components

This project was created mostly out of curiosity and to explore some ideas. It's an experiment for the moment, but you're welcome to give it a try and give feedback :)

## Example

Without

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

With (using lodash [isEmpty](https://lodash.com/docs/4.17.10#isEmpty) and [map](https://lodash.com/docs/4.17.10#isEmpty) as components)

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

react-lodash uses lodash documentation to generate components, so there's a 1:1 mapping with prop names and lodash documentation.

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

For lodash functions that return a boolean, react-lodash components accepts `yes` and `no` render props:

```jsx
<IsEmpty
  value={array}
  yes={() => <p>empty</p>}
  no={() => <p>not empty</p>}
/>
```

## Components

See [components.md](components.md) to view all available components (296).

See [lodash](https://lodash.com/docs/4.17.10) documentation for prop names.

Note: documentation will be improved in the future.

## License

MIT

[Patreon](https://www.patreon.com/typicode) - [Supporters](https://thanks.typicode.com) ✨

