import { useEffect } from "react"

export const Effect = (setLoading) => {

  useEffect(() => {

    const fetchData = () => new Promise((resolve) => resolve())

    fetchData().then(() => setLoading(false))
    
  }, [setLoading])
}
