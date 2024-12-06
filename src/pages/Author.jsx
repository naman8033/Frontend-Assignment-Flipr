import facebook_icon from "../assets/Icons/facebook_icon.svg";
import twitter_icon from "../assets/Icons/twitter_icon.svg";
import instagram_icon from "../assets/Icons/instagram_icon.svg";
import linkedIn_icon from "../assets/Icons/linkedIn_icon.svg";
import section_1_image from "../assets/images/close-up-photography-of-man-wearing-sunglasses-1212984.svg";
import shape_1 from "../assets/images/shape-1.svg";
import shape_2 from "../assets/images/shape-2.svg";
import post_image_1 from "../assets/images/stained-glass-high-rise-building-1106476.svg";
import post_image_2 from "../assets/images/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg";

function Author() {
  return (
    <>
      {/* <h1>Author</h1> */}
      {/* section 1 */}
      <section  className="relative flex justify-center w-full py-24 bg-pink-100">
        <div className="flex items-center sm:flex-row flex-col sm:w-[70%] w-[84%]">
          <img className="w-[60%]" src={section_1_image} alt="" />
          <div className="px-2 pt-5 sm:px-10 ">
            <h1 className="mb-6 text-xl font-semibold sm:text-4xl">Hey there, I{"'"}m Andrew Jonhson and welcome to my blog</h1>
            <p className="mb-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, et. Ex placeat doloremque beatae ut, reprehenderit consequatur deleniti, fugit explicabo assumenda eos numquam. Pariatur, maxime?</p>
            <div className="flex gap-4">
                <img className="w-4 h-4 cursor-pointer " src={facebook_icon} alt="facebook icon" />
                <img className="w-4 h-4 cursor-pointer " src={twitter_icon} alt="twitter icon" />
                <img className="w-4 h-4 cursor-pointer " src={instagram_icon} alt="instagram icon" />
                <img className="w-4 h-4 cursor-pointer " src={linkedIn_icon} alt="linkedIn icon" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex sm:mr-2">
          <img className="h-[19px]" src={shape_1} alt="" />
          <img className="h-[19px] hidden sm:block" src={shape_2} alt="" />
        </div>
      </section>

      {/* section 2 */}
      <section  className="flex justify-center">
        <div className="sm:w-[70%] w-[84%] sm:mt-24 mt-12">
          <h1 data-aos="fade-up" className="mb-12 text-2xl font-semibold sm:mb-20 sm:text-4xl">My Posts</h1>
          <div data-aos="fade-up" className="flex flex-col items-center gap-8 mb-12 sm:flex-row">
            <img src={post_image_1} alt="" />
            <div>
              <p className="mb-3 text-lg font-semibold text-purple-600">BUSINESS</p>
              <p className="mb-6 text-xl font-semibold sm:text-3xl">Front sizes is UI design: The complete guide to follow</p>
              <p className="text-gray-600">Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Libero est repellendus tempora officiis?</p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col items-center gap-8 mb-12 sm:flex-row">
            <img src={post_image_2} alt="" />
            <div>
              <p className="mb-3 text-lg font-semibold text-purple-600">ECONOMY</p>
              <p className="mb-6 text-xl font-semibold sm:text-3xl">How to build rapport with your web design clients</p>
              <p className="text-gray-600">Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Libero est repellendus tempora officiis?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Author;
