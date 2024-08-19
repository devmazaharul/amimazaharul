import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  
  return (
 <>

<div className="md:px-8 py-2 my-4">
  <Hero/>
  <About/>
  <Services/>
</div>
  
 </>
  );
}
