import backarrow from "../public/assets/icons/backarrow.svg";
import Input from "./Input";

const NewSurvey = () => {
  return (
    <div className="my-10 ml-10 mr-20">
      <img src={backarrow} alt="back arrow" className="w-9 cursor-pointer" />
      <div id="input__section" className="mt-[3rem] flex flex-col gap-10">
        <Input label="title" type="text" width="1100px" />
        <div id="input__second__line" className="flex gap-10">
          <Input label="" type="date" width="200px" />
          <Input
            label="type"
            type="select"
            width="200px"
            options={["", "CHOICE", "REACTION"]}
          />
          <Input label="number" type="number" width="200px" min={3} max={5} />
          <Input
            label="category"
            type="select"
            width="200px"
            options={["", "SCIENCE", "TECH", "FOOD", "OTHERS"]}
          />
        </div>
        <Input
          label="description"
          type="textbox"
          width="1100px"
          maxLength={100}
          rows={10}
        />
      </div>
      <div id="input__section__divider" className="flex gap-8">
        <div className="w-[200px] h-3 bg-[#A9A9A9] mt-20 ml-40 rounded-md" />
        <div className="w-[20px] h-3 bg-[#A9A9A9] mt-20  rounded-md" />
      </div>
    </div>
  );
};

export default NewSurvey;
