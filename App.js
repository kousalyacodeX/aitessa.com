
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Pages/Home';
import Method from './Pages/Method';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Career from './Pages/Career';
import Company from './Pages/Company';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/method" element={<Method/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/team" element={<Team/>}/>
        <Route exact path="/career" element={<Career/>}/>
        <Route exact path="/company" element={<Company/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
