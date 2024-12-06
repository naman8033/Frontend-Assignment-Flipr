import auther_1_image from "../assets/images/auther_1_image.svg";
import auther_2_image from "../assets/images/auther_2_image.svg";
import auther_3_image from "../assets/images/auther_3_image.svg";
import auther_4_image from "../assets/images/auther_4_image.svg";
import facebook_icon from "../assets/Icons/facebook_icon.svg";
import twitter_icon from "../assets/Icons/twitter_icon.svg";
import instagram_icon from "../assets/Icons/instagram_icon.svg";
import linkedIn_icon from "../assets/Icons/linkedIn_icon.svg";
import { useNavigate } from "react-router-dom";

const data = [
    {
        imageUrl: auther_1_image,
        authorName: "Floyd Miles",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        imageUrl: auther_2_image,
        authorName: "Dianne Russell",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        imageUrl: auther_3_image,
        authorName: "Jenny Wilson",
        text: "Lorem ipsum dolor sit amet.",
    },
    {
        imageUrl: auther_4_image,
        authorName: "Liestie Alexander",
        text: "Lorem ipsum dolor sit amet.",
    },
]

function ListOfAuthors({authorsData = data}) {
    const navigate = useNavigate();
    

    return (
        <>
        
            <div className="flex flex-col w-full gap-8 sm:flex-row">
            {authorsData.map(({ imageUrl, authorName, text }, index) => (
                <div onClick={() => navigate(`/author/${authorName}`)} key={index} className="flex flex-col items-center gap-2 py-12 bg-Pink sm:w-[25%] hover:bg-Light_Yellow cursor-pointer group hover:scale-[1.04] duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full">
                    {imageUrl && <img className="w-full h-full" src={imageUrl} alt={authorName} />}
                    </div>
                    <h2 className="text-2xl font-bold">{authorName}</h2>
                    <p className="text-sm ">{text}</p>
                    <div className="flex gap-5 mt-4">
                        <img className="w-4 h-4" src={facebook_icon} alt="facebook_icon" />
                        <img className="w-4 h-4" src={twitter_icon} alt="twitter_icon" />
                        <img className="w-4 h-4" src={instagram_icon} alt="instagram_icon" />
                        <img className="w-4 h-4" src={linkedIn_icon} alt="linkedIn_icon" />
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default ListOfAuthors;