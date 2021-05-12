const fs = require('fs')



export function validatePath(value: string) : string {
    if(typeof value == 'string') {
        return validateObjectfileInPath(value);
    } 
    throw 'Wrong path! Please try again'
}

export function validateObjectfileInPath(value:string) : any {
  const path = value;
  fs.access(path, fs.F_OK, (err) => {
    if(err) {
      console.log(err)
      return
    }
  })
}

export function validateObject(value: object) : object {
    if (value.hasOwnProperty('title')){
        return value;
    }
    throw 'Wrong object! This object has no tests'
}

export function parseAsInt(value: string): number {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
        throw `${value} is not a number`;
    }
    return parsedValue;
}


export function delay(ms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }




  let os = require("os");

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
