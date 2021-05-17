import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {validatePath, parseAsInt} from './utils'
import {getFirstTestBench, getSecondTestBench, getThirdTestBench} from './testCases'

const argv: any = yargs(hideBin(process.argv)).argv;

export const PATH : string = validatePath(argv.p || argv.path);
export const iterations : number = parseAsInt(argv.i || argv.iterations);
export const repeats : number = parseAsInt(argv.r || argv.repeats);

const testObject = require(PATH);
export const arrTests = testObject.tests;

getFirstTestBench();
getSecondTestBench();
getThirdTestBench();



