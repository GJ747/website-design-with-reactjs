import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import BrandBanner from './BrandBanner';
import Card1 from './Card1';
import Card2 from './Card2';
import MidBlock from './MidBlock';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Card3 from './Card3';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <BrandBanner/>
      <Card1/>
      <Card2/>
      <MidBlock/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Card3/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
