import { useState, useEffect } from 'react'

export const useMobileWidth = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(min-width:768px)').matches) {
      setIsMobileWidth(false)
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width:768px)').matches) {
        setIsMobileWidth(false)
      } else {
        setIsMobileWidth(true)
      }
    })
  }, [isMobileWidth])

  return isMobileWidth
}
