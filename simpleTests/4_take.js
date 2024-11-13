// Lesson 3 Exercise
import { strict as assert } from 'node:assert';
import _ from 'lodash';

const take = _.take;

assert.deepEqual(take([], 2), []);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([1, 1, 2], -1), []);
assert.deepEqual(take([1, 2, 3], 9), [1, 2, 3]);

console.log('The tests passed!');
