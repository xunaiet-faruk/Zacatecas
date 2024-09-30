import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbarr from "./Components/Navbarr";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer";
import QualityOfLife from "./Pages/QualityOfLife";
import Invest from "./Pages/Invest";
import News from "./Pages/News";
import IndustrialParkspage from "./Pages/IndustrialParkpage";
import NewsForm from "./Pages/NewsForm";
import NewsList from "./Pages/NewsList";
import NewsEdit from "./Pages/NewsEdit";
import Park1 from "./Pages/Park1";
import Park2 from "./Pages/Park2";
import Park3 from "./Pages/Park3";
import Park4 from "./Pages/Park4";
import Countact from "./Pages/Countact";
import watsapp from './Components/Images/Whtasapp.png'

function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/qualityoflife" element={<QualityOfLife />} />
        <Route path="/invest" element={<Invest />} /> */}

        <Route path="/" element={<Invest />} />
        <Route path="/qualityoflife" element={<QualityOfLife />} />
        <Route path="/invest" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/industrial-parks" element={<IndustrialParkspage />} />
        <Route path="/Park1" element={<Park1 />} />
        <Route path="/Park2" element={<Park2 />} />
        <Route path="/Park3" element={<Park3 />} />
        <Route path="/Park4" element={<Park4 />} />
        <Route path="/Countact" element={<Countact />} />
        <Route path="/newsForm" element={<NewsForm />} />
        <Route path="/newsRead" element={<NewsList />} />
        <Route path="/newsEdit/:id" element={<NewsEdit />} />
      </Routes>
      <Footer/>

      <div>
      
        <div className="whatsapp-icon">
          <a href="https://wa.me/01303351455" target="_blank" rel="noopener noreferrer">
            <img src={watsapp} alt="icon" style={{ width: "90px", height: "90px" }} />
          </a>
        </div>

      </div>
    </Router>
  );
}

export default App;
