
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Exchange from "./components/exchange";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init();

function App() {
  return (
    <div className="root scroll-smooth">
       <Menu />
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
