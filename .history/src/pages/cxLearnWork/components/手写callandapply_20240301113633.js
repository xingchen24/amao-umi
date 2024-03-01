//手写call

Function.prototype.call2 = function (context) {
    context.fn = this
    context.fn()
    delete context.fn
}