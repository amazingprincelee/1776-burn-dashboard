import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Burn from './pages/Burns';
import Buy from './pages/Buy'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Nav />
        <Cards />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/burn" element={<Burn />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
