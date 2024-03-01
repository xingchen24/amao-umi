// function identity(arg: number): number {
//   return arg
// }
//泛型的使用
function identity<T>(arg: T): T {
  return arg
}
let output = identity<string>("myString")

function logginIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

let tempLogginIdentity