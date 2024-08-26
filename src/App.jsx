import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainSection from "./components/main/MainSection";
import Home from "./components/home/Home";
function App() {
  return (
    <>
    <Router>
  
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
  </Routes>
  <Footer></Footer>
</Router>


      
    </>
  );
}

export default App;
