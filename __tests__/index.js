import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// Testing different styles of import
import { Truncate, UpperCase } from '../lib'
import Map from '../lib/Map'
import IsEqual from '../lib/IsEqual'

Enzyme.configure({ adapter: new Adapter() })

describe('Collection', () => {
  const array = ['foo', 'bar']
  const component = (
    <Map collection={array} iteratee={i => <li key={i}>{i}</li>}>
      {list => <ul>{list}</ul>}
    </Map>
  )

  test('Map (snapshot)', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Map', () => {
    const wrapper = shallow(component)
    expect(wrapper.find('li')).toHaveLength(array.length)
    expect(
      wrapper
        .find('li')
        .at(0)
        .text()
    ).toBe(array[0])
  })
})

describe('Lang', () => {
  const component = (
    <IsEqual value={1} other={2} yes={() => 'same'} no={() => 'different'} />
  )

  test('IsEqual (snapshot)', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('IsEqual', () => {
    const wrapper = shallow(component)
    expect(wrapper.text()).toBe('different')
  })
})

describe('String', () => {
  test('UpperCase (snapshot)', () => {
    const component = <UpperCase string="--foo-bar" />
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('UpperCase', () => {
    const component = <UpperCase string="--foo-bar" />
    const wrapper = shallow(component)
    expect(wrapper.text()).toBe('FOO BAR')
  })

  test('Truncate', () => {
    const component = <Truncate string="foo bar" options={{ length: 6 }} />
    const wrapper = shallow(component)
    expect(wrapper.text()).toBe('foo...')
  })
})
