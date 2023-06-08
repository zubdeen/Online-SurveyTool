import Avatar from "./Avatar";
import Bell from "../public/assets/icons/Bell.svg";

const ProfileSpace = () => {
  return (
    <div>
      <div className="m-8 flex gap-x-8 items-center px-3">
        <Avatar />
        <div>
          <img src={Bell} alt="Bell Icon" />
        </div>
      </div>
      <div className="h-0.5 border-[#FF956C] border-2 border-solid w-[450px] mx-3"></div>
    </div>
  );
};

export default ProfileSpace;
