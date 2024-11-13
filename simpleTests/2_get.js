// Lesson 2, 3

import _ from 'lodash';
import { strict as assert } from 'node:assert';

const get = _.get;

assert.equal(get({ hello: 'world' }, 'hello'), 'world');
// assert.strictEqual(get({ hello: 'world' }, 'hello'), 'world');

assert.equal(get({ hello: 'world' }, 'sam', 'defaultValue'), 'defaultValue');
// assert.strictEqual(get({ hello: 'world' }, 'sam', 'defaultValue'),'defaultValue',);

assert.equal(get({ hello: 'world' }, 'hello', 'defaultValue'), 'world');
// assert.strictEqual(get({ hello: 'world' }, 'hello', 'defaultValue'), 'world');

assert.equal(get({}, 'key', 'value'), 'value');
// assert.strictEqual(get({}, 'key', 'value'), 'value');

console.log('The tests passed!');
