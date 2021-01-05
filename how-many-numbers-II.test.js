const maxSumDig = require('./how-many-numbers-II')
test('test maxSumDig', ()=>{
  expect(maxSumDig(2000, 3)).toStrictEqual([11, 1110, 12555])
  expect(maxSumDig(2000, 4)).toStrictEqual([21, 1120, 23665])
  expect(maxSumDig(2000, 7)).toStrictEqual([85, 1200, 99986])
  expect(maxSumDig(3000, 7)).toStrictEqual([141, 1600, 220756])
  expect(maxSumDig(4000, 4)).toStrictEqual([35, 2000, 58331])
})