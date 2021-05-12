export interface IforCycleTest {
    name: string,
    getTest: () => number
}

export interface IforEachCycleTest {
    name: string,
    getTest: () => number
}

export interface IforOfCycleTest {
    name: string,
    getTest: () => number
}


export interface ItestObject {
    title: string,
    tests: Array<object>
}