import makeCart from '../src/cart';

test('check cart', () => {
  const cart = makeCart();

  expect(cart.getItems()).toHaveLength(0);

  const car = { name: 'car', price: 5 };
  const house = { name: 'house', price: 15 };
  cart.addItem(car, 5);
  cart.addItem(house, 2);

  expect(cart.getItems()).toHaveLength(2);
  expect(cart.getCost()).toEqual(55);
  expect(cart.getCount()).toEqual(7);

  // expect(cart.getItems()[0].product.name).toEqual('car');
  // expect(cart.getItems()[1].product.price).toEqual(15);
  expect(cart.getItems()).toEqual(
    expect.arrayContaining([
      { product: car, count: 5 },
      { product: house, count: 2 },
    ]),
  );
});
