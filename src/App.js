import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Hero } from './components/Hero';
import { Features } from './components/Projects';
import { Headline1 } from './components/Headline1';
import { Headline2 } from './components/Headline2';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Inquire } from './components/InquiryForm';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Features/>
      <Headline1/>
      <Headline2/>
      <Testimonials/>
      <Team/>
      <Inquire/>
      <Footer/>
    </>
  );
}

export default App;
