import profileImage from "../public/assets/profileImage.png";

const Avatar = () => {
  return (
    <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
      <img
        src={profileImage}
        className="object-cover w-full h-full"
        alt="Profile Image"
      />
    </div>
  );
};

export default Avatar;
