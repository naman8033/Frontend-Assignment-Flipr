import section_3_image from "../assets/images/ground-group-growth-hands-461049.svg";
import section_4_image from "../assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg";
import shapes_image from "../assets/images/shapes.svg";
import ListOfAuthors from "../components/ListOfAuthors";
import auther_5_image from "../assets/images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import auther_6_image from "../assets/images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import auther_7_image from "../assets/images/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg";
import auther_8_image from "../assets/images/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg";
import JoinOurTeamSection from "../components/JoinOurTeamSection";
import shape_1 from "../assets/images/shape-1.svg";
import shape_2 from "../assets/images/shape-2.svg";
import BgImage from "../assets/images/bgImageForAboutUsPageSection.svg";

const autherData = [
  {
      imageUrl: auther_5_image,
      authorName: "Guy Hawkins",
      text: "Lorem ipsum dolor sit amet.",
  },
  {
      imageUrl: auther_6_image,
      authorName: "Eleanor Pera",
      text: "Lorem ipsum dolor sit amet.",
  },
  {
      imageUrl: auther_7_image,
      authorName: "Robert Fox",
      text: "Lorem ipsum dolor sit amet.",
  },
  {
      imageUrl: auther_8_image,
      authorName: "Jacob Jones",
      text: "Lorem ipsum dolor sit amet.",
  },
]

function AboutUs() {
  return (
    <>
      {/* <h1>AboutUs</h1> */}
      {/* section 1 */}
      <section  className="relative flex flex-col justify-end px-6 pt-16 sm:pt-32 sm:px-16 sm:flex-row">
        <div className="sm:absolute sm:top-24 sm:left-44 sm:px-16 sm:py-10 bg-white sm:border-[1px] border-gray-200 sm:w-[34%] z-[1]">
          <h2 className="text-lg">ABOUT US</h2>
          <p className="text-xl font-bold sm:text-3xl">We are a team of content writers who share their learnings</p>
        </div>
        <div className="sm:w-[40%] mb-16 mt-4 sm:mt-0">
          <p>Lorem ipsum  amet consectetur adipisicing elit. Consequatur minus, dignissimos aut nemo cum quasi aspernatur voluptatum, sequi, quaerat deserunt a doloremque tempore eius hic!</p>
        </div>
      </section>

      {/* section 2 */}
      <section data-aos="fade-up" className="px-6 sm:px-16">
        <div className="relative w-full bg-gray-300">
          <img className="" src={BgImage} alt="" />
          <div className="absolute bottom-0 flex pl-24">
            <img className="h-[18px]" src={shape_1} alt="" />
            <img className="h-[18px] sm:block hidden" src={shape_2} alt="" />
          </div>
          <div className="flex justify-between px-4 py-8 sm:gap-12 sm:px-12 sm:absolute sm:left-24 bottom-4 bg-Yellow">
            <div>
              <h1 className="mb-2 text-2xl font-semibold text-center sm:text-start sm:text-5xl">12+</h1>
              <p className="text-center sm:text-start">Blog Published</p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl font-semibold text-center sm:text-start sm:text-5xl">18K+</h1>
              <p className="text-center sm:text-start">View on Finsweet</p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl font-semibold text-center sm:text-start sm:text-5xl">30K+</h1>
              <p className="text-center sm:text-start">Total Active Users</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-8 bg-pink-100 sm:pt-10 sm:px-20 sm:flex-row b">
          <div className="flex flex-col gap-5 p-6 sm:w-1/2">
            <h3 className="font-semibold">OUR MISSION</h3>
            <h2 className="text-xl font-semibold sm:text-3xl">Creating valuable content for creatives all around the world</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sunt ab quae vel quidem dolor placeat nulla non temporibus nesciunt obcaecati quod, esse iusto cumque veniam ipsum. Non, alias hic.</p>
          </div>
          <div className="flex flex-col gap-5 p-6 sm:w-1/2">
            <h3 className="font-semibold">OUR VISION</h3>
            <h2 className="text-xl font-semibold sm:text-3xl">A platform that empowers individuals to improve</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sunt ab quae vel quidem dolor placeat nulla non temporibus nesciunt obcaecati quod, esse iusto cumque veniam ipsum. Non, alias hic.</p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section data-aos="fade-up" className="flex flex-col items-center justify-between px-6 mt-12 sm:flex-row sm:px-16 sm:mt-24">
        <div className="sm:w-[50%] ">
          <p className="mb-4 text-2xl font-semibold sm:text-4xl">Our team of creatives</p>
          <p className="mb-4 text-lg font-semibold sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet nam accusamus!</p>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? consectetur adipisicing elit. Reiciendis doloribus deleniti voluptates illum. Blanditiis repudiandae nihil voluptates magni, tempora nesciunt exercitationem illo asperiores maiores nobis dicta, quod odit repellendus suscipit!</p>
        </div>
        <div className="relative sm:w-[45%] mt-6 sm:mt-0">
          <img className="w-full" src={section_3_image} alt="" />
          <img className="sm:block hidden absolute top-[24%] left-[-50px]" src={shapes_image} alt="" />
        </div>
      </section>

      {/* section 4 */}
      <section data-aos="fade-up" className="flex flex-col-reverse items-center justify-between px-6 mt-12 sm:flex-row sm:px-16 sm:mt-24">
      <div className="sm:w-[45%] sm:mt-0 mt-6">
          <img className="w-full" src={section_4_image} alt="" />
        </div>
        <div className="sm:w-[50%] ">
          <p className="mb-4 text-2xl font-semibold sm:text-4xl">Why we started this Blog</p>
          <p className="mb-4 text-lg font-semibold sm:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet nam accusamus!</p>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? consectetur adipisicing elit. Reiciendis doloribus deleniti voluptates illum. Blanditiis repudiandae nihil voluptates magni, tempora nesciunt exercitationem illo asperiores maiores nobis dicta, quod odit repellendus suscipit!</p>
        </div>
      </section>

      {/* section 5 - (List of Authors) */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:px-16 sm:mt-24">
        <h1 className="mb-12 text-2xl font-semibold text-center sm:text-4xl">List of Authors</h1>
        <div className="flex flex-col gap-8">
          <ListOfAuthors />
          <ListOfAuthors authorsData={autherData} />
        </div>
      </section>

      {/* section 6 - (JoinOurTeamSection) */}
      <section data-aos="fade-up" className="px-6 mt-12 sm:px-16 sm:mt-24">
        <JoinOurTeamSection />
      </section>
    </>
  );
}

export default AboutUs;
