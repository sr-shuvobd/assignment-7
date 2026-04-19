import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext();
const AllContext = ({ children }) => {
  const [chackIn, setChackIn] = useState([]);

  const [call, setCall] = useState(0);
  const [text, setText] = useState(0);
  const [video, setVideo] = useState(0);

  const timelinehandle = (data, type) => {
    const newData = {
      ...data,
      type: type,
    };
    const isCall = chackIn.find(
      (item) => item.id === data.id && item.type === type,
    );

    if (isCall) {
      toast.error("This interaction is already added to the timeline.");
      return;
    } else {
      setChackIn([...chackIn, newData]);
      toast.success("logged successfully");
      if (type == "call") {
        setCall(call + 1);
      } else if (type == "text") {
        setText(text + 1);
      } else if (type == "video") {
        setVideo(video + 1);
      }
    }
  };

  const data = {
    chackIn,
    setChackIn,
    timelinehandle,
    call,
    text,
    video,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default AllContext;
