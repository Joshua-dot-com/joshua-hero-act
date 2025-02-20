import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero'
import About from './pages/About';  
import Navbar from './components/Nav';

const App = () => {
  return <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </>
}

export default App;
