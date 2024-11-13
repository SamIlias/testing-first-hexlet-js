// import assert from 'power-assert';
//npm install --save-dev babel-preset-power-assert power-assert --legacy-peer-deps
import { strict as assert } from 'node:assert';

import _ from 'lodash';

const indexOf = _.indexOf;

assert(indexOf([], 2) === -1);
assert(indexOf([1, 2, 1, 2], 2, 4) === -1);
assert(indexOf([1, 2, 1, 2], 3) === -1);
assert(indexOf([1, 3, 1, 2], 3, 2) === -1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([1, 2, 1, 2], 1) === 0);
assert(indexOf([1, 'one', 'cat', false, null], null, -2) === 4);

console.log('The tests passed!');
