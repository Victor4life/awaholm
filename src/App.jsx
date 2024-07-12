import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import About from "./components/About/About";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
//import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import ContactUs from "./components/ContactUs/ContactUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
//import Properties from "./components/Properties/Properties";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <About />
      <Companies />
      <GetStarted />
      <Gallery />
      <Residencies />
      <GetStarted />
      <Value />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
