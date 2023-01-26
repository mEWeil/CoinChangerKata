import {coinChanger} from '../src/coinChanger'

test('takes an input of 1 penny and will return [0,0,0,1]', ()=> {
  expect(coinChanger(1)).toStrictEqual([0,0,0,1])
})

test('takes an input of 2 pennies and will return [0,0,0,2]', ()=> {
  expect(coinChanger(2)).toStrictEqual([0,0,0,2])
})

test('takes an input of 1 nickel and will return [0,0,1,0]', ()=> {
  expect(coinChanger(5)).toStrictEqual([0,0,1,0])
})

test('takes an input of 1 nickel and 1 penny and will return [0,0,1,1]', ()=> {
  expect(coinChanger(6)).toStrictEqual([0,0,1,1])
})

test('takes an input of 1 dime and will return [0,1,0,0]', ()=> {
  expect(coinChanger(10)).toStrictEqual([0,1,0,0])
})

test('takes an input of 2 dimes and will return [0,2,0,0]', ()=> {
  expect(coinChanger(20)).toStrictEqual([0,2,0,0])
})

test('takes an input of 1 quarter and will return [1,0,0,0]', ()=> {
  expect(coinChanger(25)).toStrictEqual([1,0,0,0])
})

test('takes an input of 1 quarter, 1 dime, 1 nickel, and 1 penny and will return [1,1,1,1]', ()=> {
  expect(coinChanger(41)).toStrictEqual([1,1,1,1])
})