import _ from 'lodash';

test('greater', () => {
  expect(_.gt(1, 2)).toBe(false);
  expect(_.gt(2, 2)).toBe(false);
  expect(_.gt(2)).toBe(false);
  expect(_.gt(NaN, null)).toBe(false);
  expect(_.gt(1, -2)).toBe(true);
  expect(_.gt(Infinity, 2)).toBe(true);
});
