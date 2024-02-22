interface SquareConfig {
  color?: string;
  width?: number;
}

//interface的函数写法
interface SearchFunc {
  (source: string, subString: string): boolean;
}
//interface的索引类型写法
interface StringArray {
  [index: number]: string
}
//interface中所有的成员都必须满足索引类型
interface StringTest {
  length: number;
  name: number;
  [index: string]: number;
}
//interface强制一个类实现契约
interface ClockInterface {
  currentTime: Date
}
class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}