// Lesson 3
import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.equal(capitalize('helLo'), 'HelLo');
assert.equal(capitalize(''), '');

console.log('The tests passed!');
