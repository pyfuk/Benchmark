export interface ItestObject {
  name: string;
  getTest: () => number;
}

export interface IperiodMeasurement {
  time: number;
  cpu: IcpuAverage;
}

export interface IcpuAverage {
  idle: number;
  total: number;
}

export interface ItestObject {
  title: string;
  tests: ItestObject[];
}


export interface IsetCounters {
  counterTime: number;
  counterMemoryUsage: number;
  counterCpu: number;
  testTitle: string;
}