//理解new使用过程中的原理
/*
  1. 创建一个空的javescript对象
  2. 链接该对象（即设置该对象的constructor)到另一个对象
  3. 将步骤一的js对象作为this的上下文
  4. 如果该函数没有自己的返回对象则返回this
*/

//第一种方式

function newObj(foo, ...args) {
  let obj = Object.create(foo.prototype)
  let result = foo.apply(obj, args)
  return typeof result === 'object' && result !== null ? result : obj 
}


//第二种方式

function newObjSecond() {
  let obj = new Object() 
  let constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = constructor.prototype
  let result = constructor.apply(obj, arguments)
  return result instanceof object ? result : obj
}