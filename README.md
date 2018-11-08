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

The example below uses lodash [_.isEmpty](https://lodash.com/docs/4.17.10#isEmpty) and [_.map](https://lodash.com/docs/4.17.10#isEmpty) as components.

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

## Demo

You can also try `react-lodash` on [CodeSandbox](https://codesandbox.io/s/1r5xr62qpq) 😉

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

## Importing

You can either use named imports or individually import components

```js
import { IsEmpty } from 'react-lodash'
```

```js
import IsEmpty from 'react-lodash/lib/IsEmpty'
```

## Components

Below you'll find the 296 available components. For detailed documentation, you can visit [https://lodash.com/docs](https://lodash.com/docs)

_Note: Since `react-lodash` is 1:1 mapping of `lodash`, maybe not all components will be relevant in a React application. But at least, you have many options ;)_

<!-- list -->
### Array
* `<Chunk array={} size={} />` → [_.chunk](https://lodash.com/docs/#chunk)
* `<Compact array={} />` → [_.compact](https://lodash.com/docs/#compact)
* `<Concat array={} values={} />` → [_.concat](https://lodash.com/docs/#concat)
* `<Difference array={} values={} />` → [_.difference](https://lodash.com/docs/#difference)
* `<DifferenceBy array={} values={} iteratee={} />` → [_.differenceBy](https://lodash.com/docs/#differenceBy)
* `<DifferenceWith array={} values={} comparator={} />` → [_.differenceWith](https://lodash.com/docs/#differenceWith)
* `<Drop array={} n={} />` → [_.drop](https://lodash.com/docs/#drop)
* `<DropRight array={} n={} />` → [_.dropRight](https://lodash.com/docs/#dropRight)
* `<DropRightWhile array={} predicate={} />` → [_.dropRightWhile](https://lodash.com/docs/#dropRightWhile)
* `<DropWhile array={} predicate={} />` → [_.dropWhile](https://lodash.com/docs/#dropWhile)
* `<Fill array={} value={} start={} end={} />` → [_.fill](https://lodash.com/docs/#fill)
* `<FindIndex array={} predicate={} fromIndex={} />` → [_.findIndex](https://lodash.com/docs/#findIndex)
* `<FindLastIndex array={} predicate={} fromIndex={} />` → [_.findLastIndex](https://lodash.com/docs/#findLastIndex)
* `<First array={} />` → [_.first](https://lodash.com/docs/#first)
* `<Flatten array={} />` → [_.flatten](https://lodash.com/docs/#flatten)
* `<FlattenDeep array={} />` → [_.flattenDeep](https://lodash.com/docs/#flattenDeep)
* `<FlattenDepth array={} depth={} />` → [_.flattenDepth](https://lodash.com/docs/#flattenDepth)
* `<FromPairs pairs={} />` → [_.fromPairs](https://lodash.com/docs/#fromPairs)
* `<IndexOf array={} value={} fromIndex={} />` → [_.indexOf](https://lodash.com/docs/#indexOf)
* `<Initial array={} />` → [_.initial](https://lodash.com/docs/#initial)
* `<Intersection arrays={} />` → [_.intersection](https://lodash.com/docs/#intersection)
* `<IntersectionBy arrays={} iteratee={} />` → [_.intersectionBy](https://lodash.com/docs/#intersectionBy)
* `<IntersectionWith arrays={} comparator={} />` → [_.intersectionWith](https://lodash.com/docs/#intersectionWith)
* `<Join array={} separator={} />` → [_.join](https://lodash.com/docs/#join)
* `<Last array={} />` → [_.last](https://lodash.com/docs/#last)
* `<LastIndexOf array={} value={} fromIndex={} />` → [_.lastIndexOf](https://lodash.com/docs/#lastIndexOf)
* `<Nth array={} n={} />` → [_.nth](https://lodash.com/docs/#nth)
* `<Pull array={} values={} />` → [_.pull](https://lodash.com/docs/#pull)
* `<PullAll array={} values={} />` → [_.pullAll](https://lodash.com/docs/#pullAll)
* `<PullAllBy array={} values={} iteratee={} />` → [_.pullAllBy](https://lodash.com/docs/#pullAllBy)
* `<PullAllWith array={} values={} comparator={} />` → [_.pullAllWith](https://lodash.com/docs/#pullAllWith)
* `<PullAt array={} indexes={} />` → [_.pullAt](https://lodash.com/docs/#pullAt)
* `<Remove array={} predicate={} />` → [_.remove](https://lodash.com/docs/#remove)
* `<Reverse array={} />` → [_.reverse](https://lodash.com/docs/#reverse)
* `<Slice array={} start={} end={} />` → [_.slice](https://lodash.com/docs/#slice)
* `<SortedIndex array={} value={} />` → [_.sortedIndex](https://lodash.com/docs/#sortedIndex)
* `<SortedIndexBy array={} value={} iteratee={} />` → [_.sortedIndexBy](https://lodash.com/docs/#sortedIndexBy)
* `<SortedIndexOf array={} value={} />` → [_.sortedIndexOf](https://lodash.com/docs/#sortedIndexOf)
* `<SortedLastIndex array={} value={} />` → [_.sortedLastIndex](https://lodash.com/docs/#sortedLastIndex)
* `<SortedLastIndexBy array={} value={} iteratee={} />` → [_.sortedLastIndexBy](https://lodash.com/docs/#sortedLastIndexBy)
* `<SortedLastIndexOf array={} value={} />` → [_.sortedLastIndexOf](https://lodash.com/docs/#sortedLastIndexOf)
* `<SortedUniq array={} />` → [_.sortedUniq](https://lodash.com/docs/#sortedUniq)
* `<SortedUniqBy array={} iteratee={} />` → [_.sortedUniqBy](https://lodash.com/docs/#sortedUniqBy)
* `<Tail array={} />` → [_.tail](https://lodash.com/docs/#tail)
* `<Take array={} n={} />` → [_.take](https://lodash.com/docs/#take)
* `<TakeRight array={} n={} />` → [_.takeRight](https://lodash.com/docs/#takeRight)
* `<TakeRightWhile array={} predicate={} />` → [_.takeRightWhile](https://lodash.com/docs/#takeRightWhile)
* `<TakeWhile array={} predicate={} />` → [_.takeWhile](https://lodash.com/docs/#takeWhile)
* `<Union arrays={} />` → [_.union](https://lodash.com/docs/#union)
* `<UnionBy arrays={} iteratee={} />` → [_.unionBy](https://lodash.com/docs/#unionBy)
* `<UnionWith arrays={} comparator={} />` → [_.unionWith](https://lodash.com/docs/#unionWith)
* `<Uniq array={} />` → [_.uniq](https://lodash.com/docs/#uniq)
* `<UniqBy array={} iteratee={} />` → [_.uniqBy](https://lodash.com/docs/#uniqBy)
* `<UniqWith array={} comparator={} />` → [_.uniqWith](https://lodash.com/docs/#uniqWith)
* `<Unzip array={} />` → [_.unzip](https://lodash.com/docs/#unzip)
* `<UnzipWith array={} iteratee={} />` → [_.unzipWith](https://lodash.com/docs/#unzipWith)
* `<Without array={} values={} />` → [_.without](https://lodash.com/docs/#without)
* `<Xor arrays={} />` → [_.xor](https://lodash.com/docs/#xor)
* `<XorBy arrays={} iteratee={} />` → [_.xorBy](https://lodash.com/docs/#xorBy)
* `<XorWith arrays={} comparator={} />` → [_.xorWith](https://lodash.com/docs/#xorWith)
* `<Zip arrays={} />` → [_.zip](https://lodash.com/docs/#zip)
* `<ZipObject props={} values={} />` → [_.zipObject](https://lodash.com/docs/#zipObject)
* `<ZipObjectDeep props={} values={} />` → [_.zipObjectDeep](https://lodash.com/docs/#zipObjectDeep)
* `<ZipWith arrays={} iteratee={} />` → [_.zipWith](https://lodash.com/docs/#zipWith)

### Collection
* `<CountBy collection={} iteratee={} />` → [_.countBy](https://lodash.com/docs/#countBy)
* `<Each collection={} iteratee={} />` → [_.each](https://lodash.com/docs/#each)
* `<EachRight collection={} iteratee={} />` → [_.eachRight](https://lodash.com/docs/#eachRight)
* `<Every collection={} predicate={} />` → [_.every](https://lodash.com/docs/#every)
* `<Filter collection={} predicate={} />` → [_.filter](https://lodash.com/docs/#filter)
* `<Find collection={} predicate={} fromIndex={} />` → [_.find](https://lodash.com/docs/#find)
* `<FindLast collection={} predicate={} fromIndex={} />` → [_.findLast](https://lodash.com/docs/#findLast)
* `<FlatMap collection={} iteratee={} />` → [_.flatMap](https://lodash.com/docs/#flatMap)
* `<FlatMapDeep collection={} iteratee={} />` → [_.flatMapDeep](https://lodash.com/docs/#flatMapDeep)
* `<FlatMapDepth collection={} iteratee={} depth={} />` → [_.flatMapDepth](https://lodash.com/docs/#flatMapDepth)
* `<GroupBy collection={} iteratee={} />` → [_.groupBy](https://lodash.com/docs/#groupBy)
* `<Includes collection={} value={} fromIndex={} />` → [_.includes](https://lodash.com/docs/#includes)
* `<InvokeMap collection={} path={} args={} />` → [_.invokeMap](https://lodash.com/docs/#invokeMap)
* `<KeyBy collection={} iteratee={} />` → [_.keyBy](https://lodash.com/docs/#keyBy)
* `<Map collection={} iteratee={} />` → [_.map](https://lodash.com/docs/#map)
* `<OrderBy collection={} iteratees={} orders={} />` → [_.orderBy](https://lodash.com/docs/#orderBy)
* `<Partition collection={} predicate={} />` → [_.partition](https://lodash.com/docs/#partition)
* `<Reduce collection={} iteratee={} accumulator={} />` → [_.reduce](https://lodash.com/docs/#reduce)
* `<ReduceRight collection={} iteratee={} accumulator={} />` → [_.reduceRight](https://lodash.com/docs/#reduceRight)
* `<Reject collection={} predicate={} />` → [_.reject](https://lodash.com/docs/#reject)
* `<Sample collection={} />` → [_.sample](https://lodash.com/docs/#sample)
* `<SampleSize collection={} n={} />` → [_.sampleSize](https://lodash.com/docs/#sampleSize)
* `<Shuffle collection={} />` → [_.shuffle](https://lodash.com/docs/#shuffle)
* `<Size collection={} />` → [_.size](https://lodash.com/docs/#size)
* `<Some collection={} predicate={} />` → [_.some](https://lodash.com/docs/#some)
* `<SortBy collection={} iteratees={} />` → [_.sortBy](https://lodash.com/docs/#sortBy)

### Date
* `<Now />` → [_.now](https://lodash.com/docs/#now)

### Function
* `<After n={} func={} />` → [_.after](https://lodash.com/docs/#after)
* `<Ary func={} n={} />` → [_.ary](https://lodash.com/docs/#ary)
* `<Before n={} func={} />` → [_.before](https://lodash.com/docs/#before)
* `<Bind func={} thisArg={} partials={} />` → [_.bind](https://lodash.com/docs/#bind)
* `<BindKey object={} key={} partials={} />` → [_.bindKey](https://lodash.com/docs/#bindKey)
* `<Curry func={} arity={} />` → [_.curry](https://lodash.com/docs/#curry)
* `<CurryRight func={} arity={} />` → [_.curryRight](https://lodash.com/docs/#curryRight)
* `<Debounce func={} wait={} options={} />` → [_.debounce](https://lodash.com/docs/#debounce)
* `<Defer func={} args={} />` → [_.defer](https://lodash.com/docs/#defer)
* `<Delay func={} wait={} args={} />` → [_.delay](https://lodash.com/docs/#delay)
* `<Flip func={} />` → [_.flip](https://lodash.com/docs/#flip)
* `<Memoize func={} resolver={} />` → [_.memoize](https://lodash.com/docs/#memoize)
* `<Negate predicate={} />` → [_.negate](https://lodash.com/docs/#negate)
* `<Once func={} />` → [_.once](https://lodash.com/docs/#once)
* `<OverArgs func={} transforms={} />` → [_.overArgs](https://lodash.com/docs/#overArgs)
* `<Partial func={} partials={} />` → [_.partial](https://lodash.com/docs/#partial)
* `<PartialRight func={} partials={} />` → [_.partialRight](https://lodash.com/docs/#partialRight)
* `<Rearg func={} indexes={} />` → [_.rearg](https://lodash.com/docs/#rearg)
* `<Rest func={} start={} />` → [_.rest](https://lodash.com/docs/#rest)
* `<Spread func={} start={} />` → [_.spread](https://lodash.com/docs/#spread)
* `<Throttle func={} wait={} options={} />` → [_.throttle](https://lodash.com/docs/#throttle)
* `<Unary func={} />` → [_.unary](https://lodash.com/docs/#unary)
* `<Wrap value={} wrapper={} />` → [_.wrap](https://lodash.com/docs/#wrap)

### Lang
* `<CastArray value={} />` → [_.castArray](https://lodash.com/docs/#castArray)
* `<Clone value={} />` → [_.clone](https://lodash.com/docs/#clone)
* `<CloneDeep value={} />` → [_.cloneDeep](https://lodash.com/docs/#cloneDeep)
* `<CloneDeepWith value={} customizer={} />` → [_.cloneDeepWith](https://lodash.com/docs/#cloneDeepWith)
* `<CloneWith value={} customizer={} />` → [_.cloneWith](https://lodash.com/docs/#cloneWith)
* `<ConformsTo object={} source={} />` → [_.conformsTo](https://lodash.com/docs/#conformsTo)
* `<Eq value={} other={} />` → [_.eq](https://lodash.com/docs/#eq)
* `<Gt value={} other={} />` → [_.gt](https://lodash.com/docs/#gt)
* `<Gte value={} other={} />` → [_.gte](https://lodash.com/docs/#gte)
* `<IsArguments value={} />` → [_.isArguments](https://lodash.com/docs/#isArguments)
* `<IsArray value={} />` → [_.isArray](https://lodash.com/docs/#isArray)
* `<IsArrayBuffer value={} />` → [_.isArrayBuffer](https://lodash.com/docs/#isArrayBuffer)
* `<IsArrayLike value={} />` → [_.isArrayLike](https://lodash.com/docs/#isArrayLike)
* `<IsArrayLikeObject value={} />` → [_.isArrayLikeObject](https://lodash.com/docs/#isArrayLikeObject)
* `<IsBoolean value={} />` → [_.isBoolean](https://lodash.com/docs/#isBoolean)
* `<IsBuffer value={} />` → [_.isBuffer](https://lodash.com/docs/#isBuffer)
* `<IsDate value={} />` → [_.isDate](https://lodash.com/docs/#isDate)
* `<IsElement value={} />` → [_.isElement](https://lodash.com/docs/#isElement)
* `<IsEmpty value={} />` → [_.isEmpty](https://lodash.com/docs/#isEmpty)
* `<IsEqual value={} other={} />` → [_.isEqual](https://lodash.com/docs/#isEqual)
* `<IsEqualWith value={} other={} customizer={} />` → [_.isEqualWith](https://lodash.com/docs/#isEqualWith)
* `<IsError value={} />` → [_.isError](https://lodash.com/docs/#isError)
* `<IsFinite value={} />` → [_.isFinite](https://lodash.com/docs/#isFinite)
* `<IsFunction value={} />` → [_.isFunction](https://lodash.com/docs/#isFunction)
* `<IsInteger value={} />` → [_.isInteger](https://lodash.com/docs/#isInteger)
* `<IsLength value={} />` → [_.isLength](https://lodash.com/docs/#isLength)
* `<IsMap value={} />` → [_.isMap](https://lodash.com/docs/#isMap)
* `<IsMatch object={} source={} />` → [_.isMatch](https://lodash.com/docs/#isMatch)
* `<IsMatchWith object={} source={} customizer={} />` → [_.isMatchWith](https://lodash.com/docs/#isMatchWith)
* `<IsNaN value={} />` → [_.isNaN](https://lodash.com/docs/#isNaN)
* `<IsNative value={} />` → [_.isNative](https://lodash.com/docs/#isNative)
* `<IsNil value={} />` → [_.isNil](https://lodash.com/docs/#isNil)
* `<IsNull value={} />` → [_.isNull](https://lodash.com/docs/#isNull)
* `<IsNumber value={} />` → [_.isNumber](https://lodash.com/docs/#isNumber)
* `<IsObject value={} />` → [_.isObject](https://lodash.com/docs/#isObject)
* `<IsObjectLike value={} />` → [_.isObjectLike](https://lodash.com/docs/#isObjectLike)
* `<IsPlainObject value={} />` → [_.isPlainObject](https://lodash.com/docs/#isPlainObject)
* `<IsRegExp value={} />` → [_.isRegExp](https://lodash.com/docs/#isRegExp)
* `<IsSafeInteger value={} />` → [_.isSafeInteger](https://lodash.com/docs/#isSafeInteger)
* `<IsSet value={} />` → [_.isSet](https://lodash.com/docs/#isSet)
* `<IsString value={} />` → [_.isString](https://lodash.com/docs/#isString)
* `<IsSymbol value={} />` → [_.isSymbol](https://lodash.com/docs/#isSymbol)
* `<IsTypedArray value={} />` → [_.isTypedArray](https://lodash.com/docs/#isTypedArray)
* `<IsUndefined value={} />` → [_.isUndefined](https://lodash.com/docs/#isUndefined)
* `<IsWeakMap value={} />` → [_.isWeakMap](https://lodash.com/docs/#isWeakMap)
* `<IsWeakSet value={} />` → [_.isWeakSet](https://lodash.com/docs/#isWeakSet)
* `<Lt value={} other={} />` → [_.lt](https://lodash.com/docs/#lt)
* `<Lte value={} other={} />` → [_.lte](https://lodash.com/docs/#lte)
* `<ToArray value={} />` → [_.toArray](https://lodash.com/docs/#toArray)
* `<ToFinite value={} />` → [_.toFinite](https://lodash.com/docs/#toFinite)
* `<ToInteger value={} />` → [_.toInteger](https://lodash.com/docs/#toInteger)
* `<ToLength value={} />` → [_.toLength](https://lodash.com/docs/#toLength)
* `<ToNumber value={} />` → [_.toNumber](https://lodash.com/docs/#toNumber)
* `<ToPlainObject value={} />` → [_.toPlainObject](https://lodash.com/docs/#toPlainObject)
* `<ToSafeInteger value={} />` → [_.toSafeInteger](https://lodash.com/docs/#toSafeInteger)
* `<ToString value={} />` → [_.toString](https://lodash.com/docs/#toString)

### Math
* `<Add augend={} addend={} />` → [_.add](https://lodash.com/docs/#add)
* `<Ceil number={} precision={} />` → [_.ceil](https://lodash.com/docs/#ceil)
* `<Divide dividend={} divisor={} />` → [_.divide](https://lodash.com/docs/#divide)
* `<Floor number={} precision={} />` → [_.floor](https://lodash.com/docs/#floor)
* `<Max array={} />` → [_.max](https://lodash.com/docs/#max)
* `<MaxBy array={} iteratee={} />` → [_.maxBy](https://lodash.com/docs/#maxBy)
* `<Mean array={} />` → [_.mean](https://lodash.com/docs/#mean)
* `<MeanBy array={} iteratee={} />` → [_.meanBy](https://lodash.com/docs/#meanBy)
* `<Min array={} />` → [_.min](https://lodash.com/docs/#min)
* `<MinBy array={} iteratee={} />` → [_.minBy](https://lodash.com/docs/#minBy)
* `<Multiply multiplier={} multiplicand={} />` → [_.multiply](https://lodash.com/docs/#multiply)
* `<Round number={} precision={} />` → [_.round](https://lodash.com/docs/#round)
* `<Subtract minuend={} subtrahend={} />` → [_.subtract](https://lodash.com/docs/#subtract)
* `<Sum array={} />` → [_.sum](https://lodash.com/docs/#sum)
* `<SumBy array={} iteratee={} />` → [_.sumBy](https://lodash.com/docs/#sumBy)

### Number
* `<Clamp number={} lower={} upper={} />` → [_.clamp](https://lodash.com/docs/#clamp)
* `<InRange number={} start={} end={} />` → [_.inRange](https://lodash.com/docs/#inRange)
* `<Random lower={} upper={} floating={} />` → [_.random](https://lodash.com/docs/#random)

### Object
* `<Assign object={} sources={} />` → [_.assign](https://lodash.com/docs/#assign)
* `<AssignWith object={} sources={} customizer={} />` → [_.assignWith](https://lodash.com/docs/#assignWith)
* `<At object={} paths={} />` → [_.at](https://lodash.com/docs/#at)
* `<Create prototype={} properties={} />` → [_.create](https://lodash.com/docs/#create)
* `<Defaults object={} sources={} />` → [_.defaults](https://lodash.com/docs/#defaults)
* `<DefaultsDeep object={} sources={} />` → [_.defaultsDeep](https://lodash.com/docs/#defaultsDeep)
* `<Entries object={} />` → [_.entries](https://lodash.com/docs/#entries)
* `<EntriesIn object={} />` → [_.entriesIn](https://lodash.com/docs/#entriesIn)
* `<Extend object={} sources={} />` → [_.extend](https://lodash.com/docs/#extend)
* `<ExtendWith object={} sources={} customizer={} />` → [_.extendWith](https://lodash.com/docs/#extendWith)
* `<FindKey object={} predicate={} />` → [_.findKey](https://lodash.com/docs/#findKey)
* `<FindLastKey object={} predicate={} />` → [_.findLastKey](https://lodash.com/docs/#findLastKey)
* `<ForIn object={} iteratee={} />` → [_.forIn](https://lodash.com/docs/#forIn)
* `<ForInRight object={} iteratee={} />` → [_.forInRight](https://lodash.com/docs/#forInRight)
* `<ForOwn object={} iteratee={} />` → [_.forOwn](https://lodash.com/docs/#forOwn)
* `<ForOwnRight object={} iteratee={} />` → [_.forOwnRight](https://lodash.com/docs/#forOwnRight)
* `<Functions object={} />` → [_.functions](https://lodash.com/docs/#functions)
* `<FunctionsIn object={} />` → [_.functionsIn](https://lodash.com/docs/#functionsIn)
* `<Get object={} path={} defaultValue={} />` → [_.get](https://lodash.com/docs/#get)
* `<Has object={} path={} />` → [_.has](https://lodash.com/docs/#has)
* `<HasIn object={} path={} />` → [_.hasIn](https://lodash.com/docs/#hasIn)
* `<Invert object={} />` → [_.invert](https://lodash.com/docs/#invert)
* `<InvertBy object={} iteratee={} />` → [_.invertBy](https://lodash.com/docs/#invertBy)
* `<Invoke object={} path={} args={} />` → [_.invoke](https://lodash.com/docs/#invoke)
* `<Keys object={} />` → [_.keys](https://lodash.com/docs/#keys)
* `<KeysIn object={} />` → [_.keysIn](https://lodash.com/docs/#keysIn)
* `<MapKeys object={} iteratee={} />` → [_.mapKeys](https://lodash.com/docs/#mapKeys)
* `<MapValues object={} iteratee={} />` → [_.mapValues](https://lodash.com/docs/#mapValues)
* `<Merge object={} sources={} />` → [_.merge](https://lodash.com/docs/#merge)
* `<MergeWith object={} sources={} customizer={} />` → [_.mergeWith](https://lodash.com/docs/#mergeWith)
* `<Omit object={} paths={} />` → [_.omit](https://lodash.com/docs/#omit)
* `<OmitBy object={} predicate={} />` → [_.omitBy](https://lodash.com/docs/#omitBy)
* `<Pick object={} paths={} />` → [_.pick](https://lodash.com/docs/#pick)
* `<PickBy object={} predicate={} />` → [_.pickBy](https://lodash.com/docs/#pickBy)
* `<Result object={} path={} defaultValue={} />` → [_.result](https://lodash.com/docs/#result)
* `<Set object={} path={} value={} />` → [_.set](https://lodash.com/docs/#set)
* `<SetWith object={} path={} value={} customizer={} />` → [_.setWith](https://lodash.com/docs/#setWith)
* `<Transform object={} iteratee={} accumulator={} />` → [_.transform](https://lodash.com/docs/#transform)
* `<Unset object={} path={} />` → [_.unset](https://lodash.com/docs/#unset)
* `<Update object={} path={} updater={} />` → [_.update](https://lodash.com/docs/#update)
* `<UpdateWith object={} path={} updater={} customizer={} />` → [_.updateWith](https://lodash.com/docs/#updateWith)
* `<Values object={} />` → [_.values](https://lodash.com/docs/#values)
* `<ValuesIn object={} />` → [_.valuesIn](https://lodash.com/docs/#valuesIn)

### Seq
* `<Chain value={} />` → [_.chain](https://lodash.com/docs/#chain)
* `<Tap value={} interceptor={} />` → [_.tap](https://lodash.com/docs/#tap)
* `<Thru value={} interceptor={} />` → [_.thru](https://lodash.com/docs/#thru)

### String
* `<CamelCase string={} />` → [_.camelCase](https://lodash.com/docs/#camelCase)
* `<Capitalize string={} />` → [_.capitalize](https://lodash.com/docs/#capitalize)
* `<Deburr string={} />` → [_.deburr](https://lodash.com/docs/#deburr)
* `<EndsWith string={} target={} position={} />` → [_.endsWith](https://lodash.com/docs/#endsWith)
* `<Escape string={} />` → [_.escape](https://lodash.com/docs/#escape)
* `<EscapeRegExp string={} />` → [_.escapeRegExp](https://lodash.com/docs/#escapeRegExp)
* `<KebabCase string={} />` → [_.kebabCase](https://lodash.com/docs/#kebabCase)
* `<LowerCase string={} />` → [_.lowerCase](https://lodash.com/docs/#lowerCase)
* `<LowerFirst string={} />` → [_.lowerFirst](https://lodash.com/docs/#lowerFirst)
* `<Pad string={} length={} chars={} />` → [_.pad](https://lodash.com/docs/#pad)
* `<PadEnd string={} length={} chars={} />` → [_.padEnd](https://lodash.com/docs/#padEnd)
* `<PadStart string={} length={} chars={} />` → [_.padStart](https://lodash.com/docs/#padStart)
* `<ParseInt string={} radix={} />` → [_.parseInt](https://lodash.com/docs/#parseInt)
* `<Repeat string={} n={} />` → [_.repeat](https://lodash.com/docs/#repeat)
* `<Replace string={} pattern={} replacement={} />` → [_.replace](https://lodash.com/docs/#replace)
* `<SnakeCase string={} />` → [_.snakeCase](https://lodash.com/docs/#snakeCase)
* `<Split string={} separator={} limit={} />` → [_.split](https://lodash.com/docs/#split)
* `<StartCase string={} />` → [_.startCase](https://lodash.com/docs/#startCase)
* `<StartsWith string={} target={} position={} />` → [_.startsWith](https://lodash.com/docs/#startsWith)
* `<Template string={} options={} />` → [_.template](https://lodash.com/docs/#template)
* `<ToLower string={} />` → [_.toLower](https://lodash.com/docs/#toLower)
* `<ToUpper string={} />` → [_.toUpper](https://lodash.com/docs/#toUpper)
* `<Trim string={} chars={} />` → [_.trim](https://lodash.com/docs/#trim)
* `<TrimEnd string={} chars={} />` → [_.trimEnd](https://lodash.com/docs/#trimEnd)
* `<TrimStart string={} chars={} />` → [_.trimStart](https://lodash.com/docs/#trimStart)
* `<Truncate string={} options={} />` → [_.truncate](https://lodash.com/docs/#truncate)
* `<Unescape string={} />` → [_.unescape](https://lodash.com/docs/#unescape)
* `<UpperCase string={} />` → [_.upperCase](https://lodash.com/docs/#upperCase)
* `<UpperFirst string={} />` → [_.upperFirst](https://lodash.com/docs/#upperFirst)
* `<Words string={} pattern={} />` → [_.words](https://lodash.com/docs/#words)

### Util
* `<Attempt func={} args={} />` → [_.attempt](https://lodash.com/docs/#attempt)
* `<BindAll object={} methodNames={} />` → [_.bindAll](https://lodash.com/docs/#bindAll)
* `<Cond pairs={} />` → [_.cond](https://lodash.com/docs/#cond)
* `<Conforms source={} />` → [_.conforms](https://lodash.com/docs/#conforms)
* `<Constant value={} />` → [_.constant](https://lodash.com/docs/#constant)
* `<DefaultTo value={} defaultValue={} />` → [_.defaultTo](https://lodash.com/docs/#defaultTo)
* `<Flow funcs={} />` → [_.flow](https://lodash.com/docs/#flow)
* `<FlowRight funcs={} />` → [_.flowRight](https://lodash.com/docs/#flowRight)
* `<Identity value={} />` → [_.identity](https://lodash.com/docs/#identity)
* `<Iteratee func={} />` → [_.iteratee](https://lodash.com/docs/#iteratee)
* `<Matches source={} />` → [_.matches](https://lodash.com/docs/#matches)
* `<MatchesProperty path={} srcValue={} />` → [_.matchesProperty](https://lodash.com/docs/#matchesProperty)
* `<Method path={} args={} />` → [_.method](https://lodash.com/docs/#method)
* `<MethodOf object={} args={} />` → [_.methodOf](https://lodash.com/docs/#methodOf)
* `<Mixin object={} source={} options={} />` → [_.mixin](https://lodash.com/docs/#mixin)
* `<Noop />` → [_.noop](https://lodash.com/docs/#noop)
* `<NthArg n={} />` → [_.nthArg](https://lodash.com/docs/#nthArg)
* `<Over iteratees={} />` → [_.over](https://lodash.com/docs/#over)
* `<OverEvery predicates={} />` → [_.overEvery](https://lodash.com/docs/#overEvery)
* `<OverSome predicates={} />` → [_.overSome](https://lodash.com/docs/#overSome)
* `<Property path={} />` → [_.property](https://lodash.com/docs/#property)
* `<PropertyOf object={} />` → [_.propertyOf](https://lodash.com/docs/#propertyOf)
* `<Range start={} end={} step={} />` → [_.range](https://lodash.com/docs/#range)
* `<RangeRight start={} end={} step={} />` → [_.rangeRight](https://lodash.com/docs/#rangeRight)
* `<StubArray />` → [_.stubArray](https://lodash.com/docs/#stubArray)
* `<StubFalse />` → [_.stubFalse](https://lodash.com/docs/#stubFalse)
* `<StubObject />` → [_.stubObject](https://lodash.com/docs/#stubObject)
* `<StubString />` → [_.stubString](https://lodash.com/docs/#stubString)
* `<StubTrue />` → [_.stubTrue](https://lodash.com/docs/#stubTrue)
* `<Times n={} iteratee={} />` → [_.times](https://lodash.com/docs/#times)
* `<ToPath value={} />` → [_.toPath](https://lodash.com/docs/#toPath)
* `<UniqueId prefix={} />` → [_.uniqueId](https://lodash.com/docs/#uniqueId)
<!-- list -->

## License

MIT

[Patreon](https://www.patreon.com/typicode) - [Supporters](https://thanks.typicode.com) ✨
