import generateId from './generateId'

it('should generate no duplicate values', () => {
  var arr = new Array(5).fill('')
  arr.map(() => generateId)

  // expect no duplicate values
  expect(arr.length === new Set(arr).size)
})
