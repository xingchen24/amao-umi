//防抖 
const debounce: object = () => {
  let timer: any = null
  return function(func: Function, defay: number) {
    timer && clearTimeout(timer)
  }
}