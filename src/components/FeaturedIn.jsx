import logo_1 from "../assets/images/Logo_1.svg";
import logo_2 from "../assets/images/Logo_2.svg";
import logo_3 from "../assets/images/Logo_3.svg";
import logo_4 from "../assets/images/Logo_4.svg";
import logo_5 from "../assets/images/Logo_5.svg";

function FeaturedIn() {
    const logosImage = [
        {imageUrl: logo_1},
        {imageUrl: logo_2},
        {imageUrl: logo_3},
        {imageUrl: logo_4},
        {imageUrl: logo_5},
    ]

    return (
        <>
            <div className="flex flex-col items-center justify-between sm:flex-row">
                <div className="flex gap-4 mb-5 sm:w-40 sm:block sm:mb-0">
                    <p className="text-lg sm:text-sm">We are</p>
                    <h1 className="text-lg sm:font-semibold sm:text-xl">Featured In</h1>
                </div>
                <div className="flex items-center justify-center gap-5 sm:gap-0 sm:justify-between flex-wrap sm:w-[80%] w-[100%]">
                    {logosImage.map((logo, index) => (
                        <img className="sm:w-[15%] w-[90px]" key={index} src={logo.imageUrl} alt="logo" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedIn;