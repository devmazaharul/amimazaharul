import About from "./components/About";
import { CarouselDemo } from "./components/Carosel";
import Conactpage from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import "./components/index.css"
import Workexperinece from "./components/Work-experinece";

export default function Home() {
  
  return (
 <>

<div className="md:px-8 py-2 my-4">
  <Hero/>
  <About/>
  <Services/>
  <Workexperinece/>
  <Education/>
  <CarouselDemo/>
  <Conactpage/>
  <Footer/>

</div>
  
 </>
  );
}
