import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Programs from './components/programs';
import reviews from "./data";
import Testimonial from "./components/Testimonial"
import Statistics from './components/Statistics';

function App() {
  return (
    <>
          <Navbar />
          <Hero />
          <Programs />
         <Testimonial reviews={reviews} />
         <Statistics />
         
         
    </>
  );
}

export default App;
