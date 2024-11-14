import getDaysInMonth from '../src/getDaysInMonth.js';

test('testing function getDaysInMonth()', () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);
  expect(getDaysInMonth(5, 2024)).toBe(31);

  expect(getDaysInMonth(13, 2023)).toBeNull();
  expect(getDaysInMonth(0, 2023)).toBeNull();

  expect(getDaysInMonth(2, 2024)).toBe(29);
  expect(getDaysInMonth(2, 2023)).toBe(28);
});
