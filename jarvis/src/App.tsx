import './App.css'
import { Routes, Route } from 'react-router'
import { MeLandingPage } from './main/ME/pages/MeLandingPage.tsx'
import { WeLandingPage } from './main/WE/pages/WeLandingPage.tsx'

export function App() {

  return (
    <Routes>
      <Route path="/" element={<MeLandingPage />} />
      <Route path="we" element={<WeLandingPage />} />
    </Routes>
  )
}
