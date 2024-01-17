import React, { useState, useEffect, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Loading } from "../pages/Loading"

export function AppRoutes() {
  const [components, setComponents] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true) // Set loading to true when the route changes
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
  }, [location.pathname]) // Run the effect when the route changes

  if (isLoading || !components) {
    console.log("Loading page is being displayed")
    return <Loading />
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<components.Home />} />
        <Route path="/Info" element={<components.Info />} />
        <Route path="/Contact" element={<components.Contact />} />
        <Route path="/Skills" element={<components.Skills />} />
        <Route path="*" element={<components.Error404 />} />
      </Routes>
    </Suspense>
  )
}