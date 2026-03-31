import { Routes, Route } from "react-router-dom"

import { MainLayout } from "./layouts/MainLayout"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
