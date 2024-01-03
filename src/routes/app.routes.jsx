import React, { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "../pages/Home"
import { Info } from "../pages/Info"
import { Contact } from "../pages/Contact"
import { Skills } from "../pages/Skills"
import { Loading } from "../pages/Loading"
import { Error404 } from "../pages/404"

export function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Set loading to true whenever a route change is detected
    setIsLoading(true)

    // Simulating data loading with a delay of 2 seconds
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsLoading(false)
    }

    fetchData()
  }, [location.key]) // Trigger effect when the route changes

  return (
    <Routes>
      {isLoading ? (
        // Show loading component while data is loading
        <Route path="*" element={<Loading />} />
      ) : (
        // Render the actual routes when loading is complete
        <>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="*" element={<Error404 />} />
        </>
      )}
    </Routes>
  )
}