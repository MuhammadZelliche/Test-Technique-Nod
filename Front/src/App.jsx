import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import CharacList from './Views/CharacsList'
import CharacInfos from './Views/CharacInfos'
import CharacComparator from './Views/CharacComparator'

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacList />} />
        <Route path="/characInfos" element={<CharacInfos />} />
        <Route path="/characComparator" element={<CharacComparator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
