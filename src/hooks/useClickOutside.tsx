import { RefObject, useEffect } from 'react'

function useClickOutside(ref: RefObject<HTMLElement>, callback: Function) {
  useEffect(() => {
    const lister = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      callback(event)
    }
    document.addEventListener('click', lister)
    return () => {
      document.removeEventListener('click', lister)
    }
  }, [ref, callback])
}

export default useClickOutside
