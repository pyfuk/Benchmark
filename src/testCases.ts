import { delay, cpuAverage } from "./utils";

export function getTestsBench(test, iterations, repeats) {
  let counterTime: number = 0;
  let counterMemoryUsage: number = 0;
  let counterCpu: number = 0;
  let testTitle = "";
  for (let i = 0; i < repeats; i++) {
    const startMeasure = startAndEndMeasuring();
    for (let i = 0; i <= iterations; i++) {
        test.getTest();
        testTitle = test.name;
    }
    const endMeasure = startAndEndMeasuring();
    counterTime += getUsedTime(endMeasure.time, startMeasure.time);
    counterMemoryUsage += getUsedMemory();
    counterCpu += getCPUPercentage(endMeasure, startMeasure);
    delay(500).then();
  }
  getLogs(testTitle, counterTime, counterMemoryUsage, counterCpu, repeats);
}

function getCPUPercentage(endMeasure, startMeasure ) {
    let idleDifference: number = endMeasure.cpu.idle - startMeasure.cpu.idle;
    let totalDifference: number = endMeasure.cpu.total - startMeasure.cpu.total;
    let percentageCPU: number =
      100 - ~~((100 * idleDifference) / totalDifference);
    return percentageCPU
}

function getUsedMemory(){
    return process.memoryUsage().heapUsed / 1024 / 1024;
}

function getUsedTime(endTime, startTime) {
    return endTime - startTime
}

function startAndEndMeasuring() {
    return {
            time: Date.now(),
            cpu: cpuAverage()
        }
}
function getLogs(
  testTitle,
  counterTime,
  counterMemoryUsage,
  counterCpu,
  repeats
) {
  console.log(testTitle);
  console.log("Avg work time: " + (counterTime / repeats).toFixed(2) + " ms");
  console.log(
    "Avg memory used: " + (counterMemoryUsage / repeats).toFixed(2) + " MB"
  );
  console.log("Avg CPU used: " + (counterCpu / repeats).toFixed(2) + " %");
  console.log(
    "---------------------------------------------------------------"
  );
}
