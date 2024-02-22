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
interface StringTest {
  [index: string]: number;
  length: string;
  name: number;
}