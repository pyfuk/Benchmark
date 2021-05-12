"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpuAverage = exports.delay = exports.parseAsInt = exports.validateObject = exports.validateObjectfileInPath = exports.validatePath = void 0;
const fs = require('fs');
function validatePath(value) {
    if (typeof value == 'string') {
        return validateObjectfileInPath(value);
    }
    throw 'Wrong path! Please try again';
}
exports.validatePath = validatePath;
function validateObjectfileInPath(value) {
    const path = value;
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}
exports.validateObjectfileInPath = validateObjectfileInPath;
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
