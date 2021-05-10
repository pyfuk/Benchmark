let arr = new Array(20000);
arr.fill(1,0,20000);

// console.log(arr);


module.exports = forCycleTest = {
  title: 'Test For cycle',
  Function: () => {
    let res = 0;
    
    for ( i=0 ; i<arr.length; i++){
      res = i;
    }
    return res;
  }
}


module.exports = forEachCycleTest = {
  title: 'Test ForEach cycle',
  Function: () => {
    let res = 0;
    arr.forEach((elem) => {
      res = elem;
    });
    return res;
  }
}


module.exports = forOfCycleTest = {
  title: 'Test ForOf cycle',
  Function: ()=> {
    let res = 0;
    for (let value of arr){
      res = value;
    }
  return res;
  }
}



//   const start = new Date().getTime();
//   let sum = 0;
//   function dothis() {
    
//   for ( i=0 ; i< arr.length; i++){
//     sum += i;
//   }
//   return sum;
// }
// dothis();
//   const end = new Date().getTime();
//   console.log(`SecondWay: ${end - start}ms`);



// console.time('Cycle For');

//   function dothis() {
    
//   for ( i=0 ; i< arr.length; i++){
    
//   }
//   return i;
// }
// dothis();
// console.timeEnd('Cycle For');

// console.time('Cycle ForEach');

//   function dothat() {
//     arr.forEach((elem) => {
//             res = elem
//           });
//   return res;
// }
// dothat();
// console.timeEnd('Cycle ForEach');

// console.time('Cycle ForOF');

//   function dosmth() {
//     for (let value of arr){
//             res = value
//           }
//   return res;
// }
// dosmth();
// console.timeEnd('Cycle ForOF');





