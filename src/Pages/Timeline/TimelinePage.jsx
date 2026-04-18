import React, { useContext, useRef, useState } from "react";
import { Context } from "../../Component/Context/AllContext";
import TimelineCard from "./TimelineCard";
import EmptyPage from "../../Component/Shear/EmptyPage";

const TimelinePage = () => {
  const { chackIn } = useContext(Context);
  const [sortingType, setSortingType] = useState("");
  const dropdownRef = useRef(null);

  const filteredData = sortingType
    ? chackIn.filter((item) => item.type === sortingType)
    : chackIn;

  const handleFilter = (type) => {
    setSortingType(type);
    dropdownRef.current?.blur();
  };

  return (
    <div className="container mx-auto mt-10 space-y-8">
      <h1 className="text-3xl font-bold">Timeline</h1>

      <div className="dropdown dropdown-start">
        <div ref={dropdownRef} tabIndex={0} role="button" className="btn m-1">
          Filter timeline ⬇️
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => handleFilter("")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("call")}>
            <a>All Call</a>
          </li>
          <li onClick={() => handleFilter("text")}>
            <a>All Text</a>
          </li>
          <li onClick={() => handleFilter("video")}>
            <a>Video Call</a>
          </li>
        </ul>
      </div>

      {filteredData.length === 0 ? (
        <EmptyPage />
      ) : (
        <div className="space-y-8">
          {filteredData.map((chack, ind) => (
            <TimelineCard key={ind} chack={chack} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;