
import './App.css';
import Down from './components/Connect/Down';
import HerroSection from './components/HerroSection/HerroSection';
import Navbar from './components/Navbar/Navbar';
// import ScrollCard from './components/Scroll/ScrollCard';
import Order from './components/Order/Order';
import Spon from './components/Sponser/Spon';
import TESTIMONIALS from './components/TESTIMONIALS/TESTIMONIALS';
import Ac from './components/activity/Ac';
import Collapse from './components/randomColl/Collapse';
import Banner from './components/scrollbanner/Banner';
import Qus from './components/Question/Qus';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HerroSection />
      <Order />
      <Collapse />
      <Banner />
      <Ac/>
      <Down/>
      <Spon/>
      <TESTIMONIALS/>
      <Qus/>
      <Footer/>
    </>
  );
}

export default App;
