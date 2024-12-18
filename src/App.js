// import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cards from './components/CardsSec';
//import WellnessSchedule from './components/WellnessSchedule';
// import AboutUs from './components/AboutUs';
//import ContactUs from './components/ContactUs';
import PodcastAndArticles from './components/PodcastAndArticles';
import Yoga from './components/Yoga';

import Footer from './components/Footer';
import Chat from './components/Chat';


function App() {
  const location = useLocation();

  return (
    <div className='bg-orange-100 overflow-x-hidden h-full'>
      {/* Render Nav only if not on the login page */}
      {location.pathname == "/" && <Nav />}

      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<><Herosec /><Cards /></>} />
        <Route exact path="/Chat" element={<Chat />} />
        <Route exact path="/yoga" element={<Yoga />} />
        <Route exact path="/podcast" element={<PodcastAndArticles />} />
      </Routes>

      {/* Render Footer only on the home page */}
      {location.pathname === "/" && <Aboutus/>}
      {location.pathname === "/" && <Contact />}
      {location.pathname === "/" && <Footer />}
    
     
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
