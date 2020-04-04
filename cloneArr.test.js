const cloneArr = require('./cloneArr');

test('clones arr', () => {
  const arr = [1,2,3 ];
  expect(cloneArr(arr)).toEqual(arr);
  expect(cloneArr(arr)).not.toBe(arr);
})