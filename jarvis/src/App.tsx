import './App.css'
import { Routes, Route } from 'react-router'
import { MeLandingPage } from './main/me/pages/me-landing-page.tsx'
import { WeLandingPage } from './main/we/pages/we-landing-page.tsx'

export function App() {

  return (
    <Routes>
      <Route index element={<MeLandingPage />} />
      <Route path="we" element={<WeLandingPage />} />
    </Routes>
  )
}
