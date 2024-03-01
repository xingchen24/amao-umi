//手写call

Function.prototype.call2 = function (context) {
    context.fn = this
    context.fn()
    delete context.fn
}

Function.prototype.call3 = function (context) {
  context.fn = this
  let args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  eval('context.fn(' + args + ')')
  delete context.fn
}