interface SquareConfig {
  color?: string;
  width?: number;
}

//interface的函数写法
interface SearchFunc {
  (source: string, subString: string): boolean;
}