import banner from "../assets/images/banner.svg" 
import buildingImage from "../assets/images/white-concrete-building-1838640.svg"
import shape_1 from "../assets/images/shape-1.svg";
import shape_2 from "../assets/images/shape-2.svg";
import user_image from "../assets/images/user_image.svg";
import CategoryCards from "../components/CategoryCards";
import ListOfAuthors from "../components/ListOfAuthors";
import FeaturedIn from "../components/FeaturedIn";
import arrow_icon from "../assets/Icons/arrow_icon.svg";
import Button from "../components/Button";
import BgImage from "../assets/images/bgImageForHomePageSection.svg";
import JoinOurTeamSection from "../components/JoinOurTeamSection";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* <h1 className="text-xl font-semibold">Home Page</h1> */}
      {/* section 1 - (banner) */}
      <section className="relative w-full">
        <img className="absolute w-full h-full object-cover z-[-10]" src={banner} alt="banner image" />
        <div className="bg-black bg-opacity-50 sm:bg-opacity-30 w-full text-white top-0 z-[1] h-[550px] md:h-[500px] sm:h-[400px] flex items-center sm:justify-start justify-center sm:px-10 px-6">
          <div className="sm:w-[90%]  sm:px-6 py-10 ">
            <p className="mb-2 text-sm md:mb-4 md:text-base">POSTED ON STARTUP</p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:mb-6 md:text-4xl lg:text-5xl">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="text-xs md:text-sm">By Lorem ipsum | Aug 23 2022</p>
            <p className="mt-3 md:mt-5 text-sm md:text-base w-full md:w-[80%] lg:w-[75%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit dese facere odio sunt alias labore maiores minus quae ad.
            </p>
            <div className="mt-4">
              <Button text="Read More >" onClickHandler={() => navigate("/blog-post")} />
            </div>
          </div>
        </div>
      </section>
      
      {/* section 2 - (featured post and all posts) */}
      <section data-aos="fade-up" className="flex flex-col gap-12 px-6 mt-12 sm:mt-24 sm:px-16 sm:flex-row sm:gap-0">
        {/* featured post */}
        <div className="sm:w-[50%] w-full">
          <h2 className="mb-6 text-2xl font-semibold">Featured Post</h2>
          <div className="p-5 border-[1px] border-gray-300">
            <img src={buildingImage} alt="building Image" />
            <p className="mt-5">By John Doe on | May 22 2022</p>
            <h4 className="my-3 text-xl font-semibold sm:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam error sed quibusdam.</h4>
            <p className="">Lorem ipsum dolor, adipisicing elit. Dolore suscipit saepe nostrum aut debitis in doloribus dignissimos maiores distinctio quam!</p>
              <Button text="Read More >" onClickHandler={() => navigate("/blog-post")} />
          </div>
        </div>
        {/* all posts */}
        <div className="sm:w-[50%] w-full">
        <div className="flex items-center justify-between sm:pl-12">
          <h1 className="mb-6 text-2xl font-semibold">All Posts</h1>
          <button className="text-blue-600 hover:underline" onClick={() => navigate("/blog")}>View All</button>
        </div>
          <div className="h-full py-5 overflow-y-auto sm:pl-8">
            <div onClick={() => navigate("/blog-post")} className="mb-8 cursor-pointer sm:mb-0 sm:p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-lg font-semibold sm:text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
            <div onClick={() => navigate("/blog-post")} className="mb-8 cursor-pointer sm:mb-0 sm:p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-lg font-semibold sm:text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
            <div onClick={() => navigate("/blog-post")} className="mb-8 cursor-pointer sm:mb-0 sm:p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-lg font-semibold sm:text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
            <div onClick={() => navigate("/blog-post")} className="mb-8 cursor-pointer sm:mb-0 sm:p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-lg font-semibold sm:text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 - (about us and our mission) */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <div className="flex justify-end">
          <img className="sm:h-[21px]" src={shape_2} alt="shape_2" />
          <img className="sm:h-[21px] sm:block hidden" src={shape_1} alt="shape_1" />
        </div>
        <div className="flex flex-col w-full bg-pink-100 sm:flex-row">
          <div className="sm:w-[50%] sm:p-12 p-8">
            <h1 className="mb-6 font-semibold">ABOUT US</h1>
            <p className="mb-3 text-xl font-semibold sm:text-2xl">We are a community of content writers who share their learings</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ex aut omnis inventore.</p>
            <button className="mt-6 font-bold text-purple-700 hover:underline" onClick={() => navigate("/about-us")}>Read More {">"}</button>
          </div>
          <div className="sm:w-[50%] sm:pr-10 sm:p-12 p-8">
            <h1 className="mb-6 font-semibold">OUR MISION</h1>
            <p className="mb-3 text-xl font-semibold sm:text-2xl">Creating valuable content for creatices all around the world</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla hic? Harum reprehenderit quas, aut ipsum itaque eaque quos odit.</p>
          </div>
        </div>
      </section>

      {/* section 4 - (Choose a category)*/}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl">Choose A Category</h1>
        <div>
          <CategoryCards />
        </div>
      </section>

      {/* section 5 - () */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <div className="relative w-full">
          <img className=" sm:w-[70%] mb-8 sm:mb-0" src={BgImage} alt="" />
          <div className="sm:absolute sm:bottom-0 sm:w-[40%] right-0 bg-white sm:p-20 shadow-sm flex flex-col gap-3">
            <h1>WHY WE STARTED</h1>
            <h2 className="text-xl font-semibold sm:text-3xl">It started out as a simple idea and evolved into our passion</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptas aperiam non amet sint vitae modi! Incidunt consequatur dicta voluptatibus?</p>
            <div className="mt-2">
              <Button text="Discover Our Story >" onClickHandler={() => navigate("/about-us")} />
            </div>
          </div>
        </div>
      </section>

      {/* section 6 - (List of Authors) */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl">List of Authors</h1>
        <ListOfAuthors />
      </section>

      {/* section 7 - (Featured In) */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <FeaturedIn />
      </section>

      {/* section 8 - () */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <div className="flex flex-col px-8 py-10 bg-orange-100 sm:py-16 sm:px-20 sm:flex-row">
          {/* part 1 */}
          <div className="sm:w-[40%] sm:pb-20 pb-10 sm:border-r-2 sm:pr-24">
            <h2 className="mb-2 font-semibold">Loremolipsum</h2>
            <h1 className="mb-4 text-xl font-semibold sm:text-3xl">What people say about our blog</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, laborum nulla.</p>
          </div>
          {/* part 2 */}
          <div className="sm:w-[60%] sm:pl-20 flex flex-col justify-between">
            <p className="font-semibold sm:pr-10 sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem eum nulla consequuntur cumque iusto ullam? Sit, quia recusandae?</p>
            <div className="flex items-center justify-between w-full mt-6 sm:mt-0">
              <div className="flex items-center">
                <img className="w-8 h-8 mr-4 bg-gray-300 rounded-full sm:h-10 sm:w-10" src={user_image} alt="" />
                <div>
                  <h2 className="font-semibold sm:text-xl">Janathan Vallem</h2>
                  <p className="text-[10px] sm:text-sm">New York USA</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer sm:h-10 sm:w-10 hover:scale-95 active:scale-105">
                  <img className="w-4 h-4 rotate-180 sm:h-5 sm:w-5 invert" src={arrow_icon} alt="arrow_icon" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full cursor-pointer sm:w-10 sm:h-10 juce hover:scale-95 active:scale-105">
                  <img className="w-4 h-4 sm:h-5 sm:w-5 " src={arrow_icon} alt="arrow_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 9 - (JoinOurTeamSection) */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <JoinOurTeamSection />
      </section>
    </>
  );
}

export default Home;
