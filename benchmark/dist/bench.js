"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import testObject from '../../tests/object';
var yargs_1 = __importDefault(require("yargs"));
var helpers_1 = require("yargs/helpers");
var utils_1 = require("./utils");
var forCycleTest = require('../../tests/loop.js');
var forEachCycleTest = require('../../tests/loop.js');
var forOfCycleTest = require('../../tests/loop.js');
var argv = yargs_1.default(helpers_1.hideBin(process.argv)).argv;
var path = utils_1.validatePath(argv.p || argv.path);
var iterations = (argv.i || argv.iterations);
var repeats = (argv.r || argv.repeats);
var testObject = require(path);
utils_1.validateObject(testObject);
var arrTests = testObject.tests;
function getBench() {
    var timerId = setInterval(function () {
        // if(arrTests.includes(forCycleTest)){
        var timer1 = (function () {
            console.time('Cycle For');
            var first = arrTests[0];
            first.getTest();
            console.timeEnd('Cycle For');
            console.log(utils_1.getMemoryInfo());
        })();
        // }
        // else if(arrTests.includes(forEachCycleTest)) {
        var timer2 = (function () {
            console.time('Cycle ForEach');
            var second = testObject.tests[1];
            second.getTest();
            console.timeEnd('Cycle ForEach');
            console.log(utils_1.getMemoryInfo());
        })();
        // }
        // else if(arrTests.includes(forOfCycleTest)){
        var timer3 = (function () {
            console.time('Cycle ForOF');
            var third = testObject.tests[2];
            third.getTest();
            console.timeEnd('Cycle ForOF');
            console.log(utils_1.getMemoryInfo());
        })();
        // }
    }, 1000);
    setTimeout(function () { clearInterval(timerId); console.log('stop'); }, (repeats * 1000));
}
getBench();
