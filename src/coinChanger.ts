export function coinChanger(x: number){
  let result: number[] = [0,0,0,0]
  while(x >= 25){
    x -= 25
    result[0]++
  }
  while(x >= 10){
    x -= 10
    result[1]++
  }
  while(x >= 5){
    x -= 5
    result[2]++
  }
  while(x > 0){
    x--
    result[3]++
  }
  return result
}