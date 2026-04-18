import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext();

const AllContext = ({ children }) => {

  const [chackIn, setChackIn] = useState([]);

  const timelinehandle = (data,type) => {
    
     const newData ={
      ...data,
      type : type
     }
    const isCall = chackIn.find( (item) => item.id === data.id && item.type === type);

    if (isCall) {
      toast.error("This interaction is already added to the timeline.");
      return;
    } else {
      setChackIn([...chackIn, newData]);
      toast.success("Call logged successfully");
    }
  };

  const data = {
    chackIn,
    setChackIn,
    timelinehandle,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default AllContext;
