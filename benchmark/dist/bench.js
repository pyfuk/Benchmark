"use strict";
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
// import testObject from '../../tests/object';
function getMemoryInfo() {
    var formatMemoryUsage = function (data) { return Math.round(data / 1024 / 1024 * 100) / 100 + " MB"; };
    var memoryData = process.memoryUsage();
    var memoryUsage = {
        rss: formatMemoryUsage(memoryData.rss) + " -> Resident Set Size - total memory allocated for the process execution",
        heapTotal: formatMemoryUsage(memoryData.heapTotal) + " -> total size of the allocated heap",
        heapUsed: formatMemoryUsage(memoryData.heapUsed) + " -> actual memory used during the execution",
        external: formatMemoryUsage(memoryData.external) + " -> V8 external memory",
    };
    return memoryUsage;
}
var testObject = require('../../tests/object');
var timer1 = setTimeout(function () {
    console.time('Cycle For');
    var first = testObject.tests[0];
    first.Function();
    console.timeEnd('Cycle For');
    console.log(getMemoryInfo());
}, 0);
var timer2 = setTimeout(function () {
    console.time('Cycle ForEach');
    var second = testObject.tests[1];
    second.Function();
    console.timeEnd('Cycle ForEach');
    console.log(getMemoryInfo());
}, 500);
var timer3 = setTimeout(function () {
    console.time('Cycle ForOF');
    var third = testObject.tests[2];
    third.Function();
    console.timeEnd('Cycle ForOF');
    console.log(getMemoryInfo());
}, 1000);
