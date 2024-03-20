import './App.css'
import WordOrNumber from './components/WordOrNumber'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<WordOrNumber />} />
        <Route path="/:input/:textColor/:bgColor" element={<WordOrNumber />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
