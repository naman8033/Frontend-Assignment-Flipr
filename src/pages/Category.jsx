import { useParams } from "react-router-dom";
import post_image from "../assets/images/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import CategoryCards from "../components/CategoryCards";


function Category() {
  const { categoryName } = useParams();
  console.log(categoryName);

  return (
    <>
      {/* <h1>Category</h1> */}
      {/* section 1 */}
      <section className="flex justify-center bg-pink-100">
        <div className="flex flex-col items-center sm:w-[50%] w-[60%] my-20">
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl">{categoryName || "Business"}</h1>
        <p className="mb-2 text-center sm:text-start sm:mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque.</p>
        <p className="mb-4 text-center sm:text-start">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="font-semibold ">BLOG {">"} {categoryName || "Business"}</p>
        </div>
      </section>

      {/* section 2 */}
      <section  className="flex flex-col px-6 mt-12 sm:mt-24 sm:px-16 sm:flex-row">
        <div  className="sm:w-[70%] flex flex-col gap-12">
          <div data-aos="fade-up" className="flex flex-col items-center gap-6 sm:flex-row">
            <img className="sm:w-[40%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-xl font-semibold sm:text-3xl ">Top 6 free website mockup tools 2022</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col items-center gap-6 sm:flex-row">
            <img className="sm:w-[40%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-xl font-semibold sm:text-3xl ">Step-by-step guide to choosing great font pairs</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col items-center gap-6 sm:flex-row">
            <img className="sm:w-[40%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-xl font-semibold sm:text-3xl ">Ten free foogle fonts that you should use</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col items-center gap-6 sm:flex-row">
            <img className="sm:w-[40%]" src={post_image} alt="" />
            <div className="pr-5">
              <p className="mb-3 font-semibold">{categoryName || "Business"}</p>
              <p className="mb-4 text-xl font-semibold sm:text-3xl ">What did I learn from doing 50+ design sprints?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, illo ad! Molestiae nemo exercitationem enim optio repudiandae porro cumque quas.</p>
            </div>
          </div>
        </div>
        {/* categories and All tages */}
        <div data-aos="fade-left" className="sm:w-[30%] sm:pl-16 sm:mt-0 mt-12">
          <h1 className="mb-12 text-2xl font-semibold sm:text-3xl">Categories</h1>
          <div className="flex flex-col gap-4">
            <CategoryCards isCategoryPage={true} />
          </div>
          <h1 className="my-12 text-xl font-semibold sm:text-3xl">All Tags</h1>
          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-4">
              <button className="rounded-full border-[1px] border-gray-400 px-8 py-3 hover:bg-Yellow">Business</button>
              <button className="rounded-full border-[1px] border-gray-400 w-full py-3 hover:bg-Yellow">Experience</button>
            </div>
            <div className="flex w-full gap-4">
              <button className="rounded-full border-[1px] border-gray-400 px-8 py-3 hover:bg-Yellow">Screen</button>
              <button className="rounded-full border-[1px] border-gray-400 w-full py-3 hover:bg-Yellow">Technology</button>
            </div>
            <div className="flex w-full gap-4">
              <button className="rounded-full border-[1px] border-gray-400 w-full py-3 hover:bg-Yellow">Marketing</button>
              <button className="rounded-full border-[1px] border-gray-400 px-8 py-3 hover:bg-Yellow">Life</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
