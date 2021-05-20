import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { validatePath, parseAsInt, validateObject, normalizePath } from "./utils";
import { getBench} from "./testCases";
import path from "path";

const argv: any = yargs(hideBin(process.argv)).argv;
const PATH: string = path.join(process.cwd(), argv.p || argv.path);
normalizePath(PATH)
validatePath(PATH);
const [iterations, repeats] = [parseAsInt(argv.i || argv.iterations), parseAsInt(argv.r || argv.repeats)]
export const testObject = require(PATH);
validateObject(testObject)

getBench(testObject.tests, iterations, repeats)
