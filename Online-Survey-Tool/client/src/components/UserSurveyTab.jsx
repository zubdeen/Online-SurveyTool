import Box from "./Box";
import { useState } from "react";

const UserSurveyTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBoxClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="m-7">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#422A21] text-2xl">Your Surveys</h2>
        <p className="text-white cursor-pointer">show all</p>
      </div>
      <Box>
        <div
          className={`flex items-center gap-10 my-5 p-3 ${
            isOpen ? "bg-brown" : ""
          }`}
          onClick={handleBoxClick}
        >
          <div
            id="dot"
            className="rounded-full bg-[#5F4D86] h-[20px] w-[20px]"
          />
          <h2 className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition text-[#F5F5F5]">
            Food
          </h2>
          <svg
            className={`fill-white w-10 transition-transform translate-x-[190px]`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
          </svg>
        </div>
      </Box>
    </div>
  );
};

export default UserSurveyTab;
