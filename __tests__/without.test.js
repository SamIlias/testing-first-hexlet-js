import _ from 'lodash';

test('without', () => {
  expect(_.without([])).toEqual([]);
  expect(_.without([], 1)).toEqual([]);
  expect(_.without([1, 2, 3])).toEqual([1, 2, 3]);
  expect(_.without([1, 2, 3, 1, 2], 1, 2, 4)).toEqual([3]);
  expect(_.without([1, 2, 3, 1, 2], 1, 2, 3)).toEqual([]);
});
