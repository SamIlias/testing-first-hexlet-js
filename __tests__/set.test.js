// import set from '../src/set';
import _ from 'lodash';

const set = _.set;

const initObj = { a: [{ b: { c: 3, d: undefined } }] };
let testObj;

beforeEach(() => {
  testObj = _.cloneDeep(initObj);
});

test('changeValue', () => {
  set(testObj, 'a[0].b.c', 4);
  expect(testObj.a[0].b.c).toEqual(4);
  expect(testObj).toEqual({ a: [{ b: { c: 4 } }] });
});

test('set undefined', () => {
  set(testObj, ['a', '0', 'b', 'c'], undefined);
  expect(testObj.a[0].b.c).toEqual(undefined);
  expect(testObj).toEqual({ a: [{ b: { c: undefined } }] });
});

test('change structure', () => {
  set(testObj, 'a', { d: 3 });
  expect(testObj.a).toEqual({ d: 3 });
  expect(testObj).toEqual({ a: { d: 3 } });
});

test('current value is undefined', () => {
  set(testObj, 'a[0].b.d', 4);
  expect(testObj.a[0].b.d).toEqual(4);
  expect(testObj).toEqual({ a: [{ b: { c: 3, d: 4 } }] });
});
