import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;