import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Programs from './components/programs';
import reviews from "./data";
import Testimonial from "./components/Testimonial"
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <>
          <Navbar />
          <Hero />
          <Programs />
         <Testimonial reviews={reviews} />
         <Statistics />
         <Footer />
         
         
    </>
  );
}

export default App;
