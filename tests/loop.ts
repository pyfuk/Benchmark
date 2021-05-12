import {IforCycleTest, IforEachCycleTest, IforOfCycleTest} from './../interface/interfaces'

let arr = new Array(100000);
arr.fill(1,0,100000);

const forCycleTest : IforCycleTest  = {
  name: 'Test For cycle',
  getTest: () => {
    let res : number = 0;
    for ( let i : number =0 ; i<arr.length; i++){
      res = i;
    }
    return res;
  }
}
const forEachCycleTest : IforEachCycleTest = {
  name: 'Test ForEach cycle',
  getTest: () => {
    let res : number = 0;
    arr.forEach((elem) => {
      res = elem;
    });
    return res;
  }
}
const forOfCycleTest : IforOfCycleTest = {
  name: 'Test ForOf cycle',
  getTest: () => {
    let res : number = 0;
    for (let value of arr){
      res = value;
    }
  return res;
  }
}
export const tests : Array<object>  = [forCycleTest, forEachCycleTest, forOfCycleTest]

