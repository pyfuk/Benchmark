// import forCycleTest from './loop.js';
// import forEachCycleTest from './loop.js';
// import forOfCycleTest from './loop.js';


const forCycleTest = require('./loop.js');
const forEachCycleTest = require('./loop.js');
const forOfCycleTest = require('./loop.js');

module.exports = testObject = {
    title: "Cycles tests",
    tests: [forCycleTest, forEachCycleTest, forOfCycleTest]
}

