"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpuAverage = exports.delay = exports.parseAsInt = exports.validateObject = exports.validatePath = void 0;
function validatePath(value) {
    if (typeof value == 'string') {
        return value;
    }
    throw 'Wrong path! Please try again';
}
exports.validatePath = validatePath;
function validateObject(value) {
    if (value.hasOwnProperty('title')) {
        return value;
    }
    throw 'Wrong object! This object has no tests';
}
exports.validateObject = validateObject;
function parseAsInt(value) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
        throw `${value} is not a number`;
    }
    return parsedValue;
}
exports.parseAsInt = parseAsInt;
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
exports.delay = delay;
let os = require("os");
function cpuAverage() {
    let totalIdle = 0, totalTick = 0;
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
exports.cpuAverage = cpuAverage;
