import PropTypes from "prop-types";
import heart from "../public/assets/icons/heart.svg";
import twodots from "../public/assets/icons/twodots.svg";

const DraftBox = ({ title, category }) => {
  return (
    <div
      id="drafts__box"
      className="min-w-[200px] pr-10 pl-7 py-10 border-t-8 border-t-black rounded-md flex flex-col items-center gap-10 shadow-lg relative"
    >
      <img
        src={twodots}
        alt="circlular option menu"
        className="absolute w-[7px] right-4 top-3"
      />
      <div className="flex flex-col gap-3">
        <img
          src={heart}
          alt="Heart icon in draft box"
          className="bg-[#EDEDED] p-2 mb-3 w-[40px] rounded-lg"
        />
        <h2 className="font-semibold text-2xl text-[#393939]">{title}</h2>
        <h3 className="font-medium text-md text-[#393939]">{category}</h3>
      </div>
      {/* progressbar here */}
    </div>
  );
};

DraftBox.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default DraftBox;
