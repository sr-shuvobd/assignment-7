
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const TimelineCard = ({ chack }) => {
 

  return (
    <div className="">
      <div className="shadow rounded p-5 flex gap-5">
        {chack.type == "call"? (<IoCall className="text-5xl"/>) : chack.type == "text" ? (<MdOutlineMessage className="text-5xl"/>) : chack.type == "video"? (<FaVideo className="text-5xl" />) :'' }
        
        <div>
          <h1 className="font-bold">
            {chack.type=="call" ? "Call" : chack.type=='text'? 'Text': chack.type=='video'? 'Video':''} <span className="text-gray-500">{chack.name}</span>
          </h1>
          <p>{today}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
