import makeValidator from '../src/validator';

const validator = makeValidator();

test('main flow', () => {
  expect(validator.isValid('some value')).toBe(true);

  validator.addCheck((v) => v > 5);
  expect(validator.isValid(4)).toBe(false);
  expect(validator.isValid(6)).toBe(true);

  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(4)).toBe(false);
  expect(validator.isValid(8)).toBe(true);

  expect(validator.isValid()).toBe(false);
});
