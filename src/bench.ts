import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { validatePath, parseAsInt } from "./utils";
import { getTestsBench} from "./testCases";

const argv: any = yargs(hideBin(process.argv)).argv;

const PATH: string = validatePath(argv.p || argv.path);
const iterations: number = parseAsInt(argv.i || argv.iterations);
const repeats: number = parseAsInt(argv.r || argv.repeats);

const testObject = require(PATH);
const tests = testObject.tests;

for(const value of tests){
    getTestsBench(value, iterations, repeats);
}
