import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import facebook_icon from "../assets/Icons/facebook_icon.svg";
import twitter_icon from "../assets/Icons/twitter_icon.svg";
import instagram_icon from "../assets/Icons/instagram_icon.svg";
import linkedIn_icon from "../assets/Icons/linkedIn_icon.svg";

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

  return (
    <>
      {/* <h1>Footer</h1> */}
      <footer className="px-6 py-12 mt-24 text-white bg-black sm:px-16">
        <div className="flex flex-col items-center justify-between gap-8 mb-10 sm:flex-row sm:gap-0">
            <div className="text-2xl font-bold">
            {/* {"{"}Finsweet */}
              <img src={logo} alt="logo" />
            </div>
            <ul className="flex flex-col items-center gap-3 font-semibold sm:gap-5 sm:h-10 sm:flex-row">
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/")}>Home</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/blog" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/blog")}>Blog</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/about-us" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/about-us")}>About Us</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/contact" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/contact")}>Contact Us</li>
              <li className={`cursor-pointer hover:text-sky-300 hover:border-b-2 hover:border-sky-300 ${path === "/privacy-policy" ? "border-b-2 border-sky-300 text-sky-300" : ""}`} onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
            </ul>
        </div>
        <div className="flex flex-col justify-between p-8 bg-gray-700 sm:p-16 sm:flex-row">
            <div className="font-semibold sm:text-3xl text-lg sm:w-[50%] sm:text-start text-center mb-5 sm:mb-0">Subscribe to our news letter to get latest updates and news</div>
            <div className="flex flex-col sm:flex-row sm:gap-8 gap-5 items-center sm:w-[50%] justify-end">
                <div className="sm:w-[70%]">
                    <input className="bg-gray-800 bg-opacity-50 sm:px-6 sm:py-4 w-[100%] border-[2px] border-gray-600 px-4 py-2" type="text" placeholder="Enter Your Email" />
                </div>
                <button className="px-8 py-2 font-semibold text-black bg-yellow-400 sm:py-4 sm:px-16 hover:bg-yellow-500 active:bg-yellow-400">Subscribe</button>
            </div>
        </div>
        <div className="flex flex-col items-center gap-8 mt-12 sm:justify-between sm:flex-row sm:gap-0">
            <div className="text-sm text-center text-gray-300 sm:text-base sm:text-start">
                <p>Finstreet 118 2561 Fintown</p>
                <p>Hello@finsweet.com 020 7993 2905</p>
            </div>
            <div className="flex gap-8">
                <img className="w-4 h-4 cursor-pointer invert" src={facebook_icon} alt="facebook icon" />
                <img className="w-4 h-4 cursor-pointer invert" src={twitter_icon} alt="twitter icon" />
                <img className="w-4 h-4 cursor-pointer invert" src={instagram_icon} alt="instagram icon" />
                <img className="w-4 h-4 cursor-pointer invert" src={linkedIn_icon} alt="linkedIn icon" />
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
