import {iterations, repeats, arrTests} from './bench'
import {delay, cpuAverage} from './utils'

export function getFirstTestBench(): void {
    let counterTime: number = 0;
    let counterMemoryUsage: number = 0;
    let counterCpu: number = 0;
    let firstTestTitle = '';
    for(let i = 0; i<repeats; i++){
        const startTime = Date.now();
        var startMeasure = cpuAverage();
    
    
        for(let i = 0; i <= iterations; i++) {
        let firstTest = arrTests[0];
        firstTest.getTest();
        firstTestTitle = firstTest.name;       
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
        
    }
    
    delay(500).then();
    console.log(firstTestTitle)
    console.log("Avg work time: " + (counterTime/repeats).toFixed(2) + " ms");
    console.log("Avg memory used: " + (counterMemoryUsage/repeats).toFixed(2) + " MB");
    console.log("Avg CPU used: " + (counterCpu/repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------')
}


export function getSecondTestBench(): void {
    let counterTime: number = 0;
    let counterMemoryUsage: number = 0;
    let counterCpu: number = 0;
    let secondTestTitle = '';
    for(let i = 0; i<repeats; i++){
        const startTime = Date.now();
        var startMeasure = cpuAverage();

            for(let i = 0; i <= iterations; i++) {
                let secondTest = arrTests[1];
                secondTest.getTest();
                secondTestTitle = secondTest.name;    
            }

        const endTime = Date.now();
        const workTime: number = endTime - startTime;
        counterTime += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        counterMemoryUsage += used;
        let endMeasure = cpuAverage(); 
        let idleDifference : number= endMeasure.idle - startMeasure.idle;
        let totalDifference : number = endMeasure.total - startMeasure.total;
        let percentageCPU: number = 100 - ~~(100 * idleDifference / totalDifference);
        counterCpu += percentageCPU;
        }
        delay(500).then();
        console.log(secondTestTitle);
        console.log("Avg work time: " + (counterTime/repeats).toFixed(2) + " ms");
        console.log("Avg memory used: " + (counterMemoryUsage /repeats).toFixed(2) + " MB");
        console.log("Avg CPU used: " + (counterCpu/repeats).toFixed(2) + " %");
        console.log('---------------------------------------------------------------')
    }


export function getThirdTestBench(): void {
        let counterTime: number = 0;
        let counterMemoryUsage: number = 0;
        let counterCpu: number = 0;
        let thirdTestTitle = '';
        for(let i = 0; i<repeats; i++){
            const startTime = Date.now();
            var startMeasure = cpuAverage();

                for(let i = 0; i <= iterations; i++) {
                    let thirdTest = arrTests[2];
                    thirdTest.getTest();
                    thirdTestTitle = thirdTest.name;    
                }

            const endTime = Date.now();
            const workTime: number = endTime - startTime;
            counterTime += workTime;         
            const used = process.memoryUsage().heapUsed / 1024 / 1024;
            counterMemoryUsage += used;
            let endMeasure = cpuAverage(); 
            let idleDifference : number = endMeasure.idle - startMeasure.idle;
            let totalDifference : number = endMeasure.total - startMeasure.total;
            let percentageCPU : number = 100 - ~~(100 * idleDifference / totalDifference);
            counterCpu += percentageCPU;
    }
            delay(500).then();
            console.log(thirdTestTitle);                 
            console.log("Avg work time: " + (counterTime/repeats).toFixed(2) + " ms");
            console.log("Avg memory used: " + (counterMemoryUsage /repeats).toFixed(2) + " MB");
            console.log("Avg CPU used: " + (counterCpu/repeats).toFixed(2) + " %");
            console.log('---------------------------------------------------------------')
}