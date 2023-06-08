import Box from "./Box";

const UserSurveyTab = () => {
  return (
    <div className="m-7">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#422A21] text-2xl">Your Surveys</h2>
        <p className="text-white cursor-pointer">show all</p>
      </div>
      <Box>
        <div className="flex ">
          <div id="dot" />
          <h2>Food</h2>
          <svg
            className={`fill-current mr-3 w-10 transition-transform`}
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
