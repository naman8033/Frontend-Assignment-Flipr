import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {

  return (
    <>
      <div className="">
        <Header />
        <main className="content">
          <Outlet />
          {/* This is where the child route components will render */}
        </main>
        {/* Buttons to navigate to different pages */}
        {/* <div className="flex justify-center my-4">
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/")}>Home</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/about-us")}>AboutUs</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/blog")}>Blog</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/blog-post")}>Blog Post</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/category")}>Category</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/author")}>Author</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/contact")}>Contact</button>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:scale-105 active:scale-95" onClick={() => navigate("/privacy-policy")}>PrivacyPolicy</button>
        </div> */}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
