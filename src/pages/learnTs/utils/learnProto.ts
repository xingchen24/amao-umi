//学习js的原型和原型链

let tempObj: object = {
  name: 'cx',
  age: 12
}

console.log("###", Object.getPrototypeOf(tempObj) === Object.prototype)
