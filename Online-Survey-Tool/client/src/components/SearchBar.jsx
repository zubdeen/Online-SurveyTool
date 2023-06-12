import searchIcon from "../public/assets/icons/searchIcon.svg";

const SearchBar = () => {
  return (
    <div
      id="search__bar"
      className="my-10 ml-10 mr-20 flex items-center cursor-pointer "
    >
      <input
        type="text"
        id="search__input"
        placeholder="Find Survey"
        className="rounded-sm w-[1100px] text-xl p-5 pl-20 placeholder:text-[#7D7D7D] placeholder:translate-x-[2px] shadow-md bg-[#e2e2e2] relative"
      />
      <img
        src={searchIcon}
        alt="search icon"
        className="absolute w-7 translate-x-5 object-cover"
      />
    </div>
  );
};

export default SearchBar;
