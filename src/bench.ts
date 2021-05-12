import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {validatePath, validateObject, parseAsInt} from './utils'
import {getFirstTestBench, getSecondTestBench, getThirdTestBench} from './testCases'

const argv: any = yargs(hideBin(process.argv)).argv;

const path : string = validatePath(argv.p || argv.path);
export const iterations : number = parseAsInt(argv.i || argv.iterations);
export const repeats : number = parseAsInt(argv.r || argv.repeats);

const testObject = require(path);
validateObject(testObject);
export const arrTests = testObject.tests;



getFirstTestBench();
getSecondTestBench();
getThirdTestBench();



