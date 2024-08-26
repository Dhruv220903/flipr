import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainSection from "./components/main/MainSection";
import Home from "./components/home/Home";
import Authors from "./components/authors/Authors";
import Blog from "./components/blogPage/Blog";
import Category from "./components/categoryPage/Category";
import Contact from "./components/contactPage/Contact.jsx"
import PrivacyPolicy from "./components/privacyPolicyPage/PrivacyPolicy.jsx"
function App() {
  return (
    <>
    <Router>
  
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
  
    <Route path="/authors" element={<Authors />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route path="/category" element={<Category />} />

  </Routes>
  <Footer/>
</Router>


      
    </>
  );
}

export default App;
