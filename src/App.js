import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import PriceMarkVolumn from './components/PriceMarkVolumn';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Nav />
        <PriceMarkVolumn />
        <Dashboard />
        <Footer />
        
      </div>
    
      
    </div>
  );
}

export default App;
