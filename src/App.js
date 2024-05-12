import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './pages/Error'
import ExplicationSite from './components/ExplicationSite'
import './styles/index.css'


function App() {

    return (
    <Router>
      <Header />
      <ExplicationSite />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/user/:id" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    );
}

export default App;