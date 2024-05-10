import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'

function App() {

  return (
    <HashRouter>
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
      </div>

    </HashRouter>
  )
}

export default App
