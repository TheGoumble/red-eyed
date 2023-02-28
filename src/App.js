import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Email from "./pages/Email"
import Home from "./pages/Home"
import Music from "./pages/Music"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="music" element={<Music />} />
        <Route path="email" element={<Email />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
