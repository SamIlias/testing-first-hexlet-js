import capitalize from '../src/capitalize.js';

if (capitalize('helLo') !== 'HelLo') {
  throw new Error('The function works wrong');
}

if (capitalize('') !== '') {
  throw new Error('The function works wrong');
}

console.log('The tests passed!');
