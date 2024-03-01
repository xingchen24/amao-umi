// function identity(arg: number): number {
//   return arg
// }
//类型别名的使用

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver


//字符串自变量类型
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: number, event: EventNames): number {
  return 222
}
handleEvent(233, 'click')
handleEvent(232, 'scroll')


//泛型的使用
function identity<T>(arg: T): T {
  return arg
}
let output = identity<string>("myString")

function logginIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

//泛型和接口的结合
interface CreateArrayFunc<T> {
  name: T;
  age: number;
}
let people: CreateArrayFunc<string> = {
  name: 'cx',
  age: 11
}

let numberPeople: CreateArrayFunc<number> = {
  name: 12312,
  age: 11
}



//
