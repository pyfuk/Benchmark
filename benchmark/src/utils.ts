import { title } from "process";



export function getMemoryInfo(): Object {
    const formatMemoryUsage = (data : any) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`
    
    const memoryData = process.memoryUsage()
    
    const memoryUsage: Object = {
                    rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
                    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
                    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
                    external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
    }
    
    
    return memoryUsage;
    
    }


export function validatePath(value: string) : string {
    if(typeof value == 'string') {
        return value;
    } 
    throw 'Wrong path! Please try again'
}


export function validateObject(value: object) : object {
    if (value.hasOwnProperty('title')){
        return value;
    }
    throw 'Wrong object! This object has no tests'
}