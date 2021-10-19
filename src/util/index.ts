export const Thottle = function (fn: any, delay: number) {
  let flag = false
  return function (...args) {
    const self = this
    if (flag) return
    flag = true
    setTimeout(() => {
      flag = false
      fn.apply(self, args)
    }, delay)
  }
}

export const Debounce = function (fn: any, delay: number) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    const self = this
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, delay)
  }
}
