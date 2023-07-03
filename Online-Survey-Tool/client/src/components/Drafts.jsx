import createnew from "../public/assets/icons/createnew.svg";
import DraftsBox from "./DraftBox";

const Drafts = () => {
  return (
    <div>
      <h3 className="m-10 text-xl font-semibold">Continue working on</h3>
      <div
        id="draft__main__container"
        className="m-10 w-full flex gap-8 flex-wrap"
      >
        <div
          id="create__new__box"
          className="min-w-[200px] p-10 border-t-8 border-t-black rounded-md flex flex-col items-center justify-center gap-10 shadow-lg "
        >
          <img
            src={createnew}
            alt="create new button"
            className="w-[80px] shadow-md rounded-full m-2"
          />
          ls
          <p className="font-bold text-lg text-[#422A21]">Create new</p>
        </div>

        <DraftsBox title="Hello Here" category="Category" />
        <DraftsBox title="Hello Here" category="Category" />
        <DraftsBox title="Hello Here" category="Category" />
        <DraftsBox title="Hello Here" category="Category" />
        <DraftsBox title="Hello Here" category="Category" />
      </div>
    </div>
  );
};

export default Drafts;
