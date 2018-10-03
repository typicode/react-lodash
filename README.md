# react-lodash

[![npm](https://img.shields.io/npm/v/react-lodash.svg)](https://www.npmjs.com/package/react-lodash)

> Lodash as React components

__Note:__ it's an experiment for the moment, but you're welcome to give it a try and give feedback :)

## Why?

This project was created mostly out of curiosity and to play with some ideas.

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

With

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

## Available Components

Below you'll find all available components (296).

<!-- list -->
* `<Difference />`
* `<DifferenceBy />`
* `<DifferenceWith />`
* `<Intersection />`
* `<IntersectionBy />`
* `<IntersectionWith />`
* `<Pull />`
* `<PullAt />`
* `<Union />`
* `<UnionBy />`
* `<UnionWith />`
* `<Without />`
* `<Xor />`
* `<XorBy />`
* `<XorWith />`
* `<Zip />`
* `<ZipWith />`
* `<Chunk />`
* `<Compact />`
* `<Concat />`
* `<Drop />`
* `<DropRight />`
* `<DropRightWhile />`
* `<DropWhile />`
* `<Fill />`
* `<Flatten />`
* `<FlattenDeep />`
* `<FlattenDepth />`
* `<FromPairs />`
* `<Initial />`
* `<PullAll />`
* `<PullAllBy />`
* `<PullAllWith />`
* `<Remove />`
* `<Reverse />`
* `<Slice />`
* `<SortedUniq />`
* `<SortedUniqBy />`
* `<Tail />`
* `<Take />`
* `<TakeRight />`
* `<TakeRightWhile />`
* `<TakeWhile />`
* `<Uniq />`
* `<UniqBy />`
* `<UniqWith />`
* `<Unzip />`
* `<UnzipWith />`
* `<ZipObject />`
* `<ZipObjectDeep />`
* `<FindIndex />`
* `<FindLastIndex />`
* `<First />`
* `<IndexOf />`
* `<Join />`
* `<Last />`
* `<LastIndexOf />`
* `<Nth />`
* `<SortedIndex />`
* `<SortedIndexBy />`
* `<SortedIndexOf />`
* `<SortedLastIndex />`
* `<SortedLastIndexBy />`
* `<SortedLastIndexOf />`
* `<CountBy />`
* `<GroupBy />`
* `<InvokeMap />`
* `<KeyBy />`
* `<Partition />`
* `<SortBy />`
* `<Find />`
* `<FindLast />`
* `<Filter />`
* `<FlatMap />`
* `<FlatMapDeep />`
* `<FlatMapDepth />`
* `<Map />`
* `<OrderBy />`
* `<Reject />`
* `<SampleSize />`
* `<Shuffle />`
* `<Every />`
* `<Each />`
* `<EachRight />`
* `<Includes />`
* `<Reduce />`
* `<ReduceRight />`
* `<Sample />`
* `<Size />`
* `<Some />`
* `<Now />`
* `<Bind />`
* `<BindKey />`
* `<Defer />`
* `<Delay />`
* `<OverArgs />`
* `<Partial />`
* `<PartialRight />`
* `<Rearg />`
* `<After />`
* `<Ary />`
* `<Before />`
* `<Curry />`
* `<CurryRight />`
* `<Debounce />`
* `<Flip />`
* `<Memoize />`
* `<Negate />`
* `<Once />`
* `<Rest />`
* `<Spread />`
* `<Throttle />`
* `<Unary />`
* `<Wrap />`
* `<Gt />`
* `<Gte />`
* `<IsArguments />`
* `<IsArray />`
* `<IsArrayBuffer />`
* `<IsBuffer />`
* `<IsDate />`
* `<IsMap />`
* `<IsRegExp />`
* `<IsSet />`
* `<IsTypedArray />`
* `<Lt />`
* `<Lte />`
* `<CastArray />`
* `<ToArray />`
* `<ToPlainObject />`
* `<Clone />`
* `<CloneDeep />`
* `<CloneDeepWith />`
* `<CloneWith />`
* `<ConformsTo />`
* `<Eq />`
* `<IsArrayLike />`
* `<IsArrayLikeObject />`
* `<IsBoolean />`
* `<IsElement />`
* `<IsEmpty />`
* `<IsEqual />`
* `<IsEqualWith />`
* `<IsError />`
* `<IsFinite />`
* `<IsFunction />`
* `<IsInteger />`
* `<IsLength />`
* `<IsMatch />`
* `<IsMatchWith />`
* `<IsNaN />`
* `<IsNative />`
* `<IsNil />`
* `<IsNull />`
* `<IsNumber />`
* `<IsObject />`
* `<IsObjectLike />`
* `<IsPlainObject />`
* `<IsSafeInteger />`
* `<IsString />`
* `<IsSymbol />`
* `<IsUndefined />`
* `<IsWeakMap />`
* `<IsWeakSet />`
* `<ToFinite />`
* `<ToInteger />`
* `<ToLength />`
* `<ToNumber />`
* `<ToSafeInteger />`
* `<ToString />`
* `<Add />`
* `<Ceil />`
* `<Divide />`
* `<Floor />`
* `<Multiply />`
* `<Round />`
* `<Subtract />`
* `<Max />`
* `<MaxBy />`
* `<Mean />`
* `<MeanBy />`
* `<Min />`
* `<MinBy />`
* `<Sum />`
* `<SumBy />`
* `<Clamp />`
* `<InRange />`
* `<Random />`
* `<Assign />`
* `<Extend />`
* `<ExtendWith />`
* `<AssignWith />`
* `<At />`
* `<Defaults />`
* `<DefaultsDeep />`
* `<Invert />`
* `<InvertBy />`
* `<Merge />`
* `<MergeWith />`
* `<Omit />`
* `<Pick />`
* `<Entries />`
* `<EntriesIn />`
* `<Invoke />`
* `<Create />`
* `<Functions />`
* `<FunctionsIn />`
* `<Keys />`
* `<KeysIn />`
* `<MapKeys />`
* `<MapValues />`
* `<OmitBy />`
* `<PickBy />`
* `<Set />`
* `<SetWith />`
* `<Transform />`
* `<Unset />`
* `<Update />`
* `<UpdateWith />`
* `<Values />`
* `<ValuesIn />`
* `<FindKey />`
* `<FindLastKey />`
* `<ForIn />`
* `<ForInRight />`
* `<ForOwn />`
* `<ForOwnRight />`
* `<Get />`
* `<Has />`
* `<HasIn />`
* `<Result />`
* `<Chain />`
* `<Tap />`
* `<Thru />`
* `<CamelCase />`
* `<KebabCase />`
* `<LowerCase />`
* `<LowerFirst />`
* `<SnakeCase />`
* `<StartCase />`
* `<UpperCase />`
* `<UpperFirst />`
* `<Split />`
* `<Words />`
* `<Capitalize />`
* `<Deburr />`
* `<EndsWith />`
* `<Escape />`
* `<EscapeRegExp />`
* `<Pad />`
* `<PadEnd />`
* `<PadStart />`
* `<ParseInt />`
* `<Repeat />`
* `<Replace />`
* `<StartsWith />`
* `<Template />`
* `<ToLower />`
* `<ToUpper />`
* `<Trim />`
* `<TrimEnd />`
* `<TrimStart />`
* `<Truncate />`
* `<Unescape />`
* `<BindAll />`
* `<Flow />`
* `<FlowRight />`
* `<Method />`
* `<MethodOf />`
* `<Over />`
* `<OverEvery />`
* `<OverSome />`
* `<Range />`
* `<RangeRight />`
* `<Attempt />`
* `<Cond />`
* `<Conforms />`
* `<Constant />`
* `<Iteratee />`
* `<Matches />`
* `<MatchesProperty />`
* `<Mixin />`
* `<NthArg />`
* `<Property />`
* `<PropertyOf />`
* `<ToPath />`
* `<DefaultTo />`
* `<Identity />`
* `<StubArray />`
* `<StubFalse />`
* `<StubObject />`
* `<StubString />`
* `<StubTrue />`
* `<Noop />`
* `<Times />`
* `<UniqueId />`
<!-- list -->

## License

MIT

[Patreon](https://www.patreon.com/typicode) - [Supporters](https://thanks.typicode.com) ✨

