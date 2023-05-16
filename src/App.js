import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Nav />
        <Cards />
        <Dashboard />
        <Footer />
        
      </div>
    
      
    </div>
  );
}

export default App;
