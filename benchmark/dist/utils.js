"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObject = exports.validatePath = exports.getMemoryInfo = void 0;
function getMemoryInfo() {
    var formatMemoryUsage = function (data) { return Math.round(data / 1024 / 1024 * 100) / 100 + " MB"; };
    var memoryData = process.memoryUsage();
    var memoryUsage = {
        rss: formatMemoryUsage(memoryData.rss) + " -> Resident Set Size - total memory allocated for the process execution",
        heapTotal: formatMemoryUsage(memoryData.heapTotal) + " -> total size of the allocated heap",
        heapUsed: formatMemoryUsage(memoryData.heapUsed) + " -> actual memory used during the execution",
        external: formatMemoryUsage(memoryData.external) + " -> V8 external memory",
    };
    return memoryUsage;
}
exports.getMemoryInfo = getMemoryInfo;
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
