"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThirdTestBench = exports.getSecondTestBench = exports.getFirstTestBench = void 0;
const bench_1 = require("./bench");
const utils_1 = require("./utils");
function getFirstTestBench() {
    let counterTime = 0;
    let counterMemoryUsage = 0;
    let counterCpu = 0;
    let firstTestTitle = '';
    for (let i = 0; i < bench_1.repeats; i++) {
        const startTime = Date.now();
        var startMeasure = utils_1.cpuAverage();
        for (let i = 0; i <= bench_1.iterations; i++) {
            let firstTest = bench_1.arrTests[0];
            firstTest.getTest();
            firstTestTitle = firstTest.name;
        }
        const endTime = Date.now();
        const workTime = endTime - startTime;
        counterTime += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        counterMemoryUsage += used;
        let endMeasure = utils_1.cpuAverage();
        let idleDifference = endMeasure.idle - startMeasure.idle;
        let totalDifference = endMeasure.total - startMeasure.total;
        let percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);
        counterCpu += percentageCPU;
    }
    utils_1.delay(500).then();
    console.log(firstTestTitle);
    console.log("Avg work time: " + (counterTime / bench_1.repeats).toFixed(2) + " ms");
    console.log("Avg memory used: " + (counterMemoryUsage / bench_1.repeats).toFixed(2) + " MB");
    console.log("Avg CPU used: " + (counterCpu / bench_1.repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------');
}
exports.getFirstTestBench = getFirstTestBench;
function getSecondTestBench() {
    let counterTime = 0;
    let counterMemoryUsage = 0;
    let counterCpu = 0;
    let secondTestTitle = '';
    for (let i = 0; i < bench_1.repeats; i++) {
        const startTime = Date.now();
        var startMeasure = utils_1.cpuAverage();
        for (let i = 0; i <= bench_1.iterations; i++) {
            let secondTest = bench_1.arrTests[1];
            secondTest.getTest();
            secondTestTitle = secondTest.name;
        }
        const endTime = Date.now();
        const workTime = endTime - startTime;
        counterTime += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        counterMemoryUsage += used;
        let endMeasure = utils_1.cpuAverage();
        let idleDifference = endMeasure.idle - startMeasure.idle;
        let totalDifference = endMeasure.total - startMeasure.total;
        let percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);
        counterCpu += percentageCPU;
    }
    utils_1.delay(500).then();
    console.log(secondTestTitle);
    console.log("Avg work time: " + (counterTime / bench_1.repeats).toFixed(2) + " ms");
    console.log("Avg memory used: " + (counterMemoryUsage / bench_1.repeats).toFixed(2) + " MB");
    console.log("Avg CPU used: " + (counterCpu / bench_1.repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------');
}
exports.getSecondTestBench = getSecondTestBench;
function getThirdTestBench() {
    let counterTime = 0;
    let counterMemoryUsage = 0;
    let counterCpu = 0;
    let thirdTestTitle = '';
    for (let i = 0; i < bench_1.repeats; i++) {
        const startTime = Date.now();
        var startMeasure = utils_1.cpuAverage();
        for (let i = 0; i <= bench_1.iterations; i++) {
            let thirdTest = bench_1.arrTests[2];
            thirdTest.getTest();
            thirdTestTitle = thirdTest.name;
        }
        const endTime = Date.now();
        const workTime = endTime - startTime;
        counterTime += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        counterMemoryUsage += used;
        let endMeasure = utils_1.cpuAverage();
        let idleDifference = endMeasure.idle - startMeasure.idle;
        let totalDifference = endMeasure.total - startMeasure.total;
        let percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);
        counterCpu += percentageCPU;
    }
    utils_1.delay(500).then();
    console.log(thirdTestTitle);
    console.log("Avg work time: " + (counterTime / bench_1.repeats).toFixed(2) + " ms");
    console.log("Avg memory used: " + (counterMemoryUsage / bench_1.repeats).toFixed(2) + " MB");
    console.log("Avg CPU used: " + (counterCpu / bench_1.repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------');
}
exports.getThirdTestBench = getThirdTestBench;
