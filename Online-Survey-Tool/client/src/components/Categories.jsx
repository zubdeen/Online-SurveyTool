import BackArrow from "../public/assets/icons/Survey/BackArrow.svg";
import FileIcon from "../public/assets/icons/Survey/FileIcon.svg";
import FileIcon2 from "../public/assets/icons/Survey/FileIcon2.svg";

const Categories = () => {
  const categories = [
    "Science",
    "Tech",
    "Food",
    "Science",
    "Tech",
    "Food",
    "Science",
    "Tech",
    "Food",
  ];

  return (
    <div>
      <div className="back-arrow">
        <img src={BackArrow} />
      </div>
      <h1 className="text-lg ml-[40px] mt-[80px] font-bold text-gray-700">
        Choose your topic
      </h1>
      <div className="categories-container">
        <div className="categories">
          {categories.map((category) => (
            <div className="cat_box">
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="m-2.5">
                      <img src={FileIcon} />
                    </div>
                    <span className="font-weight font-bold ml-4">
                      {category}
                    </span>
                  </div>
                  <div className="m-2.5">
                    <img src={FileIcon2} />
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div className="cat_box">
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="m-2.5">
                      <img src={FileIcon} />
                    </div>
                    <span className="font-weight font-bold ml-4">
                      {category}
                    </span>
                  </div>
                  <div className="m-2.5">
                    <img src={FileIcon2} />
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
