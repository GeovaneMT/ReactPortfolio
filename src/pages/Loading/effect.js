import { useEffect } from "react"

export const Effect = (setLoading) => {
  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }

    fetchData().then(() => {
      setLoading(false)
    })
  }, [setLoading])
}
