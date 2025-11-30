import './App.css'
import { Routes, Route } from 'react-router'
import { MeLandingPage } from './main/ME/MeLandingPage.tsx'
import { WeLandingPage } from './main/WE/WeLandingPage.tsx'

export function App() {

  return (
    <Routes>
      <Route path="/" element={<MeLandingPage />} />
      <Route path="we" element={<WeLandingPage />} />
    </Routes>
  )
}
