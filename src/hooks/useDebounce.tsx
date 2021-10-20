import { useState, useEffect } from 'react'
// TODO 拓展回调版本
function useDebounce(value: any, delay = 500) {
  const [state, setstate] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setstate(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value])
  return state
}

export default useDebounce
