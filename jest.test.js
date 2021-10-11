test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
  // expect(2 + 2).not.toBe(4)
})

test('aaa an object', () => {
  expect({ name: 'test' }).toEqual({ name: 'test' })
})
