import { useNavigate } from "react-router-dom";
import Button from "./Button";

function JoinOurTeamSection() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center sm:w-[32%] gap-4">
        <h1 className="text-2xl font-bold text-center sm:text-3xl">Join our team to be a part of our story</h1>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt cupiditate dolore.
        </p>
        <div>
          <Button text="Join Now" onClickHandler={() => navigate("/contact")} />
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeamSection;
