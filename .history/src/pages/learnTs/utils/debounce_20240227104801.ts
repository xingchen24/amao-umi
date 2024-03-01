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