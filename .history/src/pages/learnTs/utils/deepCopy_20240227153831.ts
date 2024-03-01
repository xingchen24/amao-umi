//深拷贝

function deepCopy(sourceObj: any) {
  if(typeof sourceObj !== 'object') return sourceObj
  let result: any = Array.isArray(sourceObj) ? [] : {}
  for (let key in sourceObj) {
    if (sourceObj[key] && typeof sourceObj[key] === 'object') {
      result[key] = deepCopy(sourceObj[key])
    } else {
      result[key] = sourceObj[key]
    }
  }
}