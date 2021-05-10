// var Benchmark = require('benchmark');

// var suite = new Benchmark.Suite;
 
// // add tests
// let arr = [];
// let sum = 0;
// for ( let i = 0; i < 10; i++ ) {
    
//         arr.push( Math.round( Math.random() * 100 ));
    
//     }
// suite.add('forCycle#test', function() {
//     let sum = 0;
//   for(let i=0; i<10; i++){
//     sum += i;
    
//   }
//   return sum;
// })
// .add('forEachCycle#test', function() {
    
//     arr.forEach(function(item) {
//         sum += item;
//     })
//     return sum;
// })
// // add listeners
// .on('cycle', function(event) {
//   console.log(String(event.target));
// })
// .on('complete', function() {
//   console.log('Fastest is ' + this.filter('fastest').map('name'));
// })
// // run async
// .run({ 'async': true });




// const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`

// const memoryData = process.memoryUsage()

// const memoryUsage = {
//                 rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
//                 heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
//                 heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
//                 external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
// }

// console.log(memoryUsage)


import testObject from '../../tests/object';

console.time('Cycle For');
testObject.tests[0];
console.timeEnd('Cycle For');

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