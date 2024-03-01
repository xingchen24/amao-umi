//防抖 
const debounce: Function = () => {
  let timer: any = null
  return function(func: Function, defay: number) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func && func()
    }, defay)
    return timer
  }
}

//节流
const throttle: Function = () => {
  let pre: number = Date.now()
  return function(func: Function, defay: number) {
    let now = Date.now() 
    if (now - pre  > 500) {
      func && func()
      pre = now
    } else {
      return
    }
  }
}