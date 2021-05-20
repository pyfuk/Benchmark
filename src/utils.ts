import fs from "fs";
import os from "os";
import {IcpuAverage, ItestObject} from "../interface/interfaces";
import {testObject} from "./bench";

export function normalizePath(pathToObject: string) : string {
  const parsedValue = parseInt(pathToObject);
    if (isNaN(parsedValue)) {
      return pathToObject
    } throw new Error("Wrong path")
}
export function validatePath(pathToObject: string): string {
    if (!fs.existsSync(pathToObject)) {
      throw new Error("Its not a file");
    }
    if (pathToObject.split('.').pop() !== "js") {
      throw new Error("Wrong file format");
    }
    return testObject
  
}

export function validateObject(object:ItestObject) {
    if (!object.title && !object.tests){
      throw new Error("Its not an object with tests")
    }
    return object;
  } 
  
export function parseAsInt(value: string): number {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) {
    throw `${value} is not a number`;
  } else if (parsedValue <= 0) {
    throw `There can be no negative number`;
  }
  return parsedValue;
}

export function delay(ms: number) : Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

export function cpuAverage() : IcpuAverage {
  let totalIdle = 0,
    totalTick = 0;
  let cpus = os.cpus();
  for (let i = 0, len = cpus.length; i < len; i++) {
    let cpu = cpus[i];
    for (let type in cpu.times) {
      totalTick += cpu.times[type];
    }
    totalIdle += cpu.times.idle;
  }
  return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
}
