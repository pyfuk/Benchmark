import { delay, cpuAverage } from "./utils";
import { ItestObject, IperiodMeasurement, IsetCounters } from "../interface/interfaces";

export function runWarmingUp(test: ItestObject, iterations: number) {
  for (let i = 0; i <= iterations; i++) {
    test.getTest();
  }
  console.log('Прогрев завершен. Выполнение тестов...')
}

export function runBench(tests : ItestObject[], iterations: number, repeats: number) {
  for(const test of tests){
    getTestsBench(test, iterations, repeats);
  }
}

function getTestsBench(
  test: ItestObject,
  iterations: number,
  repeats: number
) {
  let counters = setCounters()
    for (let i = 0; i < repeats; i++) {
      const startMeasure = periodMeasurement();
      for (let i = 0; i <= iterations; i++) {
        test.getTest();
        counters.testTitle = test.name;
      }
      const endMeasure = periodMeasurement();
      counters.counterTime += getUsedTime(endMeasure.time, startMeasure.time);
      counters.counterMemoryUsage += getUsedMemory();
      counters.counterCpu += getCPUPercentage(endMeasure, startMeasure);
      delay(500).then();
  }
  logInfo(counters, repeats);
}

function setCounters(): IsetCounters  {
  return {
  counterTime: 0,
  counterMemoryUsage: 0,
  counterCpu: 0,
  testTitle: ""
  }
}

function getCPUPercentage(
  endCPUinfo: IperiodMeasurement,
  startCPUinfo: IperiodMeasurement
) {
  let idleDifference: number = endCPUinfo.cpu.idle - startCPUinfo.cpu.idle;
  let totalDifference: number = endCPUinfo.cpu.total - startCPUinfo.cpu.total;
  let percentageCPU: number =
    100 - ~~((100 * idleDifference) / totalDifference);
  return percentageCPU;
}

function getUsedMemory(): number {
  return process.memoryUsage().heapUsed / 1024 / 1024;
}

function getUsedTime(endTime: number, startTime: number): number {
  return endTime - startTime;
}

function periodMeasurement(): IperiodMeasurement {
  return {
    time: Date.now(),
    cpu: cpuAverage(),
  };
}
function logInfo(
  counters: IsetCounters,
  repeats: number
) {
  console.log(counters.testTitle);
  console.log("Avg work time: " + (counters.counterTime / repeats).toFixed(2) + " ms");
  console.log(
    "Avg memory used: " + (counters.counterMemoryUsage / repeats).toFixed(2) + " MB"
  );
  console.log("Avg CPU used: " + (counters.counterCpu / repeats).toFixed(2) + " %");
  console.log(
    "---------------------------------------------------------------"
  );
}
