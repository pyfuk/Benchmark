import {forCycleTest} from './loop.js';
import {forEachCycleTest} from './loop.js';
import {forOfCycleTest} from './loop.js';

export default testObject = {
    title: "Cycles tests",
    tests: [forCycleTest, forEachCycleTest, forOfCycleTest]
}

console.time('Cycle For');
testObject.tests[0];
console.timeEnd('Cycle For');