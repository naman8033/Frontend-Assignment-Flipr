import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Author from "./pages/Author";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init({
      // Animation duration in milliseconds
      duration: 1000, 
      // Animation only happens once as you scroll down
      once: true,     
    });
  }, []);
  
  return (
    <>
      {/* <h1 className="text-3xl font-bold ">Frontend Project</h1> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/blog" element={<Blog />} />            
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/about-us" element={<AboutUs />} />     
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/author" element={<Author />} /> 
          <Route path="/author/:authorName" element={<Author />} /> 
          <Route path="/contact" element={<Contact />} />      
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
