import { useState, useEffect } from "react"

export function useRouteLoader(location) {
  const [components, setComponents] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    Promise.all([
      import("../pages/Home"),
      import("../pages/Info"),
      import("../pages/Contact"),
      import("../pages/Skills"),
      import("../pages/404"),
    ])
      .then(([{ Home }, { Info }, { Contact }, { Skills }, { Error404 }]) => {
        setComponents({ Home, Info, Contact, Skills, Error404 })
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error loading components:", error)
      })
  }, [location])

  return { components, isLoading }
}