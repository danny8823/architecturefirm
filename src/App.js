import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';
import { NavBar } from "./components/NavBar";
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Headline1 } from './components/Headline1';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Inquire } from './components/InquiryForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Projects/>
      <Headline1/>
      <Testimonials/>
      <Team/>
      <Inquire/>
      <Footer/>
    </>
  );
}

export default App;
