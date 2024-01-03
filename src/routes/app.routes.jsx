import {Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Info } from '../pages/Info'
import { Contact } from '../pages/Contact'
import { Skills } from '../pages/Skills'
import { Error404 } from "../pages/404"

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Error404" element={<Error404 />} />
    </Routes>
  )
}