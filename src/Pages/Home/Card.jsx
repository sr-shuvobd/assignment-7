import React, { use } from "react";
import { Link } from "react-router";

const dataPromis = fetch("/frienddata.json").then((res) => res.json());
console.log(dataPromis);
const Card = () => {
  const AllData = use(dataPromis);
  console.log(AllData);
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Your Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {AllData.map((data) => {
          return (
            <Link to ={`/details/${data.id}`}
              key={data.id}
              className="shadow flex flex-col justify-center items-center text-center p-10 rounded-2xl space-y-3"
            >
              <img
                src={data.picture}
                alt="data.name"
                className="w-20 h-20 rounded-full object-cover"
              />
              <h1 className="text-xl font-bold">{data.name}</h1>
              <p className="text-gray-500">{data.days_since_contact}d ago</p>
              <div className="flex gap-5">
                {data.tags.map((tag, ind) => (
                  <div key={ind} className=" bg-[#cbfadb] badge">
                    {tag}
                  </div>
                ))}
              </div>

              <p
                className={`btn rounded-4xl text-white ${data.status == "overdue" ? "bg-[#ef4444]" : data.status == "almost due" ? "bg-[#efad44]" : data.status == "on-track" ? "bg-[#244d3f]" : ""}`}
              >
                {data.status}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
