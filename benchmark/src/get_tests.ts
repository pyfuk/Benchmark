import {iterations, repeats, arrTests} from './bench'
import {delay, cpuAverage} from './utils'


export function getFirstTestBench(): void {
    let counter: number = 0;
    let memoryUsage: number = 0;
    let cpuChek: number = 0;
    for(let i = 0; i<repeats; i++){
        const startTime = Date.now();
        var startMeasure = cpuAverage();
    
    
        for(let i = 0; i <= iterations; i++) {
        let firstTest = arrTests[0];
        firstTest.getTest();       
        }
        
        const endTime = Date.now();
        const workTime: number = endTime - startTime;
        counter += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        memoryUsage += used;
        let endMeasure = cpuAverage(); 
        let idleDifference: number = endMeasure.idle - startMeasure.idle;
        let totalDifference: number= endMeasure.total - startMeasure.total;
        let percentageCPU: number = 100 - ~~(100 * idleDifference / totalDifference);
        cpuChek += percentageCPU;
    
    }
    
    delay(500).then();
    console.log("First test results:");
    console.log("Avg work time:" + (counter/repeats).toFixed(2) + " ms");
    console.log("Avg memory used:" + (memoryUsage/repeats).toFixed(2) + " MB");
    console.log("Avg CPU used:" + (cpuChek/repeats).toFixed(2) + " %");
    console.log('---------------------------------------------------------------')
}


export function getSecondTestBench(): void {
    let counter: number = 0;
    let memoryUsage: number = 0;
    let cpuChek: number = 0;
    for(let i = 0; i<repeats; i++){
        const startTime = Date.now();
        var startMeasure = cpuAverage();

            for(let i = 0; i <= iterations; i++) {
                let secondTest = arrTests[1];
                secondTest.getTest();     
            }

        const endTime = Date.now();
        const workTime: number = endTime - startTime;
        counter += workTime;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        memoryUsage += used;
        let endMeasure = cpuAverage(); 
        let idleDifference : number= endMeasure.idle - startMeasure.idle;
        let totalDifference : number = endMeasure.total - startMeasure.total;
        let percentageCPU: number = 100 - ~~(100 * idleDifference / totalDifference);
        cpuChek += percentageCPU;
        }
        delay(500).then();
        console.log("Second test results:");
        console.log("Avg work time of second test:" + (counter/repeats).toFixed(2) + " ms");
        console.log("Avg memory used by second test:" + (memoryUsage /repeats).toFixed(2) + " MB");
        console.log("Avg CPU used by second test:" + (cpuChek/repeats).toFixed(2) + " %");
        console.log('---------------------------------------------------------------')
    }


export function getThirdTestBench(): void {
        let counter: number = 0;
        let memoryUsage: number = 0;
        let cpuChek: number = 0;
        for(let i = 0; i<repeats; i++){
            const startTime = Date.now();
            var startMeasure = cpuAverage();

                for(let i = 0; i <= iterations; i++) {
                    let thirdTest = arrTests[2];
                    thirdTest.getTest();     
                }

            const endTime = Date.now();
            const workTime: number = endTime - startTime;
            counter += workTime;         
            const used = process.memoryUsage().heapUsed / 1024 / 1024;
            memoryUsage += used;
            let endMeasure = cpuAverage(); 
            let idleDifference : number = endMeasure.idle - startMeasure.idle;
            let totalDifference : number = endMeasure.total - startMeasure.total;
            let percentageCPU : number = 100 - ~~(100 * idleDifference / totalDifference);
            cpuChek += percentageCPU;
    }
            delay(500).then();
            console.log("Third test results:");                 
            console.log("Avg work time of third test:" + (counter/repeats).toFixed(2) + " ms");
            console.log("Avg memory used by third test:" + (memoryUsage /repeats).toFixed(2) + " MB");
            console.log("Avg CPU used by third test:" + (cpuChek/repeats).toFixed(2) + " %");
            console.log('---------------------------------------------------------------')
}