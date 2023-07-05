import React from "react";
import terrible from "../public/assets/icons/Survey/terible_emoji.svg";
import bad from "../public/assets/icons/Survey/bad_emoji.svg";
import okay from "../public/assets/icons/Survey/okay_emoji.svg";
import good from "../public/assets/icons/Survey/good_emoji.svg";
import blown from "../public/assets/icons/Survey/blown_emoji.svg";
import dropDown from "../public/assets/icons/Survey/drop_down.svg";

const options = [
  { key: "OPTION 1", value: terrible },
  { key: "OPTION 2", value: bad },
  { key: "OPTION 3", value: okay },
  { key: "OPTION 4", value: good },
  { key: "OPTION 5", value: blown },
];

const OptionBox = ({ option }) => {
  return (
    <div className=" flex-col items-center w-[96px] h-[105px] mx-2.5 p-3 bg-white shadow-md rounded relative">
      <div className="text-[10px] text-left w-full pl-2">{option.key}</div>
      <img src={dropDown} className="absolute top-2 right-2 h-3 w-3" />
      <img src={option.value} className="my-2" />
    </div>
  );
};

const NewSurvey = () => (
  <div
    className="flex flex-wrap justify-center md:flex-nowrap "
    // style={{
    //   position: "absolute",
    //   top: "800px",
    //   left: "500px",
    //   "@media (max-width: 600px)": {
    //     top: "100px",
    //     left: "10px",
    //   },
    // }}
  >
    {options.map((option) => (
      <>
        <OptionBox option={option} key={option.key} />
      </>
    ))}
    <span className="w-[96px] h-[31px] bg-white shadow-md rounded self-center">
      {" "}
      {Object.values}{" "}
    </span>
    <style jsx>{`
      @media (max-width: 600px) {
        .flex {
          flex-wrap: wrap;
        }
        .md\:flex-col {
          flex-wrap: column;
        }
      }
    `}</style>
  </div>
);

export default NewSurvey;
