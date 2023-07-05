import surveysImage from "../public/assets/icons/Survey/chemical.svg";
import Vector from "../public/assets/icons/Survey/Vector.svg";

const SurveyBox = () => (
  <div className="box mt-16">
    <div className="star">
      <img src={Vector} alt="star" />
    </div>
    <div className="circle">
      <img src={surveysImage} alt="Chemical" />
    </div>
    <span className="text">Science Experiments</span>
    <span className="text_2">
      Would you like to try a dangerous experiment?
    </span>
    <div className="bar"></div>
    <span className="text_3">70/100</span>
  </div>
);

const SurveyComponent = () => (
  <div className="relative">
    <h1 className="text-lg font-bold text-center text-gray-700 absolute top-4 left-[105px] transform -translate-x-1/2">
      Public Surveys
    </h1>
    <SurveyBox />
    <div className="ml-[280px]">
      <SurveyBox />
    </div>
    <div className="ml-[560px]">
      <SurveyBox />
    </div>
  </div>
);

export default SurveyComponent;
