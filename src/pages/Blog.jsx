import image_1 from "../assets/images/blogPageImage.svg";
import Button from "../components/Button";
import post_1_image from "../assets/images/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import post_2_image from "../assets/images/photo-of-people-doing-handshakes-3183197.svg";
import post_3_image from "../assets/images/photo-of-woman-looking-at-man-3183173.svg";
import post_4_image from "../assets/images/photo-of-people-walking-on-hallway-3182811.svg";
import CategoryCards from "../components/CategoryCards";
import JoinOurTeamSection from "../components/JoinOurTeamSection";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  return (
    <>
      {/* <h1>Blog</h1> */}
      {/* section 1 (featured post) */}
      <section className="w-full">
        <div className="flex flex-col items-center justify-between gap-8 px-6 py-16 bg-pink-100 sm:gap-8 sm:p-16 sm:flex-row">
          <div className="sm:w-[55%]">
            <h2>FEATURED POST</h2>
            <p className="mt-4 text-2xl font-semibold sm:text-4xl">Step-by-step guide to choosing great font pairs</p>
            <p className="mt-6">By John Doe | May 23 2022</p>
            <p className="pr-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi iste perferendis recusandae alias ipsam dignissimos.</p>
            <Button text="Read More >" onClickHandler={() => navigate("/blog-post")}  />
          </div>
          <div className="sm:w-[40%]">
            <img src={image_1} alt="image" />
          </div>
        </div>
      </section>

      {/* section 2 (all posts) */}
      <section  className="px-6 mt-12 sm:px-16">
        <h1 className="mb-10 text-2xl font-semibold sm:mb-20 sm:text-4xl">All Posts</h1>
        <div className="flex flex-col gap-16">
          {/* post 1 */}
          <div data-aos="fade-right" className="flex flex-col sm:gap-12 sm:flex-row">
            <img src={post_1_image} alt="Post 1 image" />
            <div className="py-5 sm:py-12">
              <p className="mb-3 text-lg text-purple-600 sm:mb-6">STARTUP</p>
              <h1 className="mb-4 text-xl font-semibold sm:text-4xl">Design tips for designers that cover everything you need</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 2 */}
          <div data-aos="fade-left" className="flex flex-col sm:gap-12 sm:flex-row">
            <img src={post_2_image} alt="Post 2 image" />
            <div className="py-5 sm:py-12">
              <p className="mb-3 text-lg text-purple-600 sm:mb-6">BUSINESS</p>
              <h1 className="mb-4 text-xl font-semibold sm:text-4xl">How to build rapport with your web design clients</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 3 */}
          <div data-aos="fade-right" className="flex flex-col sm:gap-12 sm:flex-row">
            <img src={post_3_image} alt="Post 3 image" />
            <div className="py-5 sm:py-12">
              <p className="mb-3 text-lg text-purple-600 sm:mb-6">STARTUP</p>
              <h1 className="mb-4 text-xl font-semibold sm:text-4xl">Logo design trends to avoid in 2022</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 4 */}
          <div data-aos="fade-left" className="flex flex-col sm:gap-12 sm:flex-row">
            <img src={post_4_image} alt="Post 4 image" />
            <div className="py-5 sm:py-12">
              <p className="mb-3 text-lg text-purple-600 sm:mb-6">TECHNOLOGY</p>
              <h1 className="mb-4 text-xl font-semibold sm:text-4xl">8 Figma design systems you can download for free today</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          {/* post 5 */}
          <div data-aos="fade-right" className="flex flex-col sm:gap-12 sm:flex-row">
            <img src={post_1_image} alt="Post 5 image" />
            <div className="py-5 sm:py-12">
              <p className="mb-3 text-lg text-purple-600 sm:mb-6">ECONOMY</p>
              <h1 className="mb-4 text-xl font-semibold sm:text-4xl">Font sizes in UI design: The compete guide to follow</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit sit libero quasi sapiente molestiae doloremque hic minus eum pariatur.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-lg font-semibold text-gray-500">
            <button className="hover:text-black hover:scale-105 active:scale-95">
              {"<"} Prev
            </button>
            <button className="hover:text-black hover:scale-105 active:scale-95">
              Next {">"}
            </button>
            </div>
          </div>

        </div>
        
      </section>

      {/* section 3 - (Choose a category)*/}
      <section data-aos="fade-up" className="px-6 mt-12 sm:px-16">
        <h1 className="mb-12 text-2xl font-semibold sm:text-4xl ">All Categories</h1>
        <div>
          <CategoryCards />
        </div>
      </section>
      

      {/* section 4 - (JoinOurTeamSection) */}
      <section data-aos="fade-up" className="px-6 mt-12">
        <JoinOurTeamSection />
      </section>
    </>
  );
}

export default Blog;
