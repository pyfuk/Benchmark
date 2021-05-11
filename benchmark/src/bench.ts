// import testObject from '../../tests/object';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {getMemoryInfo, validatePath, validateObject} from './utils'
const forCycleTest = require('../../tests/loop.js');
const forEachCycleTest = require('../../tests/loop.js');
const forOfCycleTest = require('../../tests/loop.js');

const argv: any = yargs(hideBin(process.argv)).argv;

const path : string = validatePath(argv.p || argv.path);
const iterations : number = (argv.i || argv.iterations);
const repeats : number = (argv.r || argv.repeats);

const testObject = require(path);
validateObject(testObject);
const arrTests = testObject.tests;



function getBench() {
    let timerId = setInterval(()=> {
    // if(arrTests.includes(forCycleTest)){
        let timer1 = (() => {
            console.time('Cycle For');
            let first = arrTests[0];
            first.getTest();
            console.timeEnd('Cycle For');
            console.log(getMemoryInfo());
            })()
            
            
    // }
    // else if(arrTests.includes(forEachCycleTest)) {
        let timer2 = (() => {
            console.time('Cycle ForEach');
            let second = testObject.tests[1];
            second.getTest();
            console.timeEnd('Cycle ForEach');
            console.log(getMemoryInfo());
            })()
    // }
    // else if(arrTests.includes(forOfCycleTest)){
        let timer3 = (() => {
            console.time('Cycle ForOF');
            let third = testObject.tests[2];
            third.getTest();
            console.timeEnd('Cycle ForOF');
            console.log(getMemoryInfo());
            })()
            
    // }
}, 1000)
setTimeout(()=> {clearInterval(timerId); console.log('stop')}, (repeats*1000));
    
}


getBench();









