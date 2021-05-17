let path = require('path')
const fs = require('fs')
let os = require("os");

export function validatePath(value: string) : any {
    if(typeof value !== 'string') {
        throw 'Wrong path! Please try again'
    } 
    fs.access(value, fs.F_OK, (err) => {
      if(err) {
        throw "File not founded"  
      } else if( path.extname(value) !== '.js') {
        throw "Wrong file format"
      } fs.readFile(value, (err, data) => {
          if (err) throw err;
          let objectWithTests = data.toString();
          objectWithTests = JSON.parse(objectWithTests);
          if(objectWithTests['title'] && objectWithTests['tests']) {
            return value
          } throw "Its not test file";
      }) 
    })
}

export function parseAsInt(value: string): number {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
        throw `${value} is not a number`;
    } else if (parsedValue <= 0) {
      throw `There can be no negative number`
    } return parsedValue;    
}

export function delay(ms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

export function cpuAverage() {
  let totalIdle = 0, totalTick = 0;
  let cpus = os.cpus();
  for(let i = 0, len = cpus.length; i < len; i++) {
    let cpu = cpus[i];
    for(let type in cpu.times) {
      totalTick += cpu.times[type];
   }     
    totalIdle += cpu.times.idle;
  }
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}




