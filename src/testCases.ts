import {delay, cpuAverage} from './utils'

function setCounters(arrTests, iterations, repeats, testID) {
    let counterTime: number = 0;
    let counterMemoryUsage: number = 0;
    let counterCpu: number = 0;
    let testTitle = '';
    for(let i = 0; i<repeats; i++){
        const startTime = Date.now();
        var startMeasure = cpuAverage();    
        for(let i = 0; i <= iterations; i++) {
        let selectTest = arrTests[testID];
        selectTest.getTest();
        testTitle = selectTest.name;       
        }    
        const endTime = Date.now();
        const workTime: number = endTime - startTime;
        counterTime += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        counterMemoryUsage += used;
        let endMeasure = cpuAverage(); 
        let idleDifference: number = endMeasure.idle - startMeasure.idle;
        let totalDifference: number= endMeasure.total - startMeasure.total;
        let percentageCPU: number = 100 - ~~(100 * idleDifference / totalDifference);
        counterCpu += percentageCPU;
        delay(500).then();
        getLogs(testTitle, counterTime, counterMemoryUsage, counterCpu, repeats)   
    }
}
function getLogs(testTitle, counterTime, counterMemoryUsage, counterCpu, repeats) {
    console.log(testTitle)
    console.log("Avg work time: " + (counterTime/repeats).toFixed(2) + " ms");
    console.log("Avg memory used: " + (counterMemoryUsage/repeats).toFixed(2) + " MB");
    console.log("Avg CPU used: " + (counterCpu/repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------')
}

export function getFirstTestBench(arrTests, iterations, repeats ): void {
    setCounters(arrTests, iterations, repeats, 0);
}


export function getSecondTestBench(arrTests, iterations, repeats): void {
    setCounters(arrTests, iterations, repeats, 1);
}


export function getThirdTestBench(arrTests, iterations, repeats): void {
    setCounters(arrTests, iterations, repeats, 2);
}