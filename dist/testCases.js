"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThirdTestBench = exports.getSecondTestBench = exports.getFirstTestBench = void 0;
const bench_1 = require("./bench");
const utils_1 = require("./utils");
function setCounters(testID) {
    let counterTime = 0;
    let counterMemoryUsage = 0;
    let counterCpu = 0;
    let testTitle = '';
    for (let i = 0; i < bench_1.repeats; i++) {
        const startTime = Date.now();
        var startMeasure = utils_1.cpuAverage();
        for (let i = 0; i <= bench_1.iterations; i++) {
            let selectTest = bench_1.arrTests[testID];
            selectTest.getTest();
            testTitle = selectTest.name;
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
        utils_1.delay(500).then();
        getLogs(testTitle, counterTime, counterMemoryUsage, counterCpu);
    }
}
function getLogs(testTitle, counterTime, counterMemoryUsage, counterCpu) {
    console.log(testTitle);
    console.log("Avg work time: " + (counterTime / bench_1.repeats).toFixed(2) + " ms");
    console.log("Avg memory used: " + (counterMemoryUsage / bench_1.repeats).toFixed(2) + " MB");
    console.log("Avg CPU used: " + (counterCpu / bench_1.repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------');
}
function getFirstTestBench() {
    setCounters(0);
}
exports.getFirstTestBench = getFirstTestBench;
function getSecondTestBench() {
    setCounters(1);
}
exports.getSecondTestBench = getSecondTestBench;
function getThirdTestBench() {
    setCounters(2);
}
exports.getThirdTestBench = getThirdTestBench;
