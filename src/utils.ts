import path from "path";
import fs from "fs";
import os from "os";

export function validatePath(value: string): any {
  if (typeof value !== "string") {
    throw "Wrong path! Please try again";
  }
  try {
    if (!fs.existsSync(value)) {
      throw new Error("Its not a file");
    }
    if (path.extname(value) !== ".js") {
      throw new Error("Wrong file format");
    }
    // const data = fs.readFileSync(value, {encoding: 'utf8', flag: 'r'});
    // let objectWithTests = data.toString();
    // objectWithTests = JSON.parse(objectWithTests);
    // console.log(objectWithTests)
    // if(!objectWithTests['title'] && !objectWithTests['tests']) {
    //       throw "Its not test file";
    // }
  } catch (err) {
    console.error(err);
  }
  return value;
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

export function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

export function cpuAverage() {
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
