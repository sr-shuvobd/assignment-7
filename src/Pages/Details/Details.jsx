import React, { use } from "react";
import { FaArchive } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdDeleteForever, MdNotificationsPaused } from "react-icons/md";
import { Link } from "react-router";
import { useParams } from "react-router";
const dataPromich = fetch("/frienddata.json").then((res) => res.json());

const Details = () => {
  const params = useParams();

  const AllData = use(dataPromich);

  const data = AllData.find((data) => data.id == params.id);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-7">
      {/* card 1 */}
      <div className="col-span-1 row-span-3">
        <div className="shadow-xl flex flex-col justify-center items-center text-center p-10 rounded-2xl space-y-3">
          <img
            src={data.picture}
            alt="data.name"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold">{data.name}</h1>
          <p
            className={`btn rounded-4xl text-white ${data.status == "overdue" ? "bg-[#ef4444]" : data.status == "almost due" ? "bg-[#efad44]" : data.status == "on-track" ? "bg-[#244d3f]" : ""}`}
          >
            {data.status}
          </p>
          <div className="flex gap-5">
            {data.tags.map((tag, ind) => (
              <div key={ind} className=" bg-[#cbfadb] badge">
                {tag}
              </div>
            ))}
          </div>
          <p>{data.bio}</p>
        </div>
        <div className="flex flex-col">
          <button className="btn mt-5 rounded font-bold bg-white"><MdNotificationsPaused />Snooze 2 weeks</button>
          <button className="btn mt-5 rounded font-bold bg-white"> <FaArchive />Archive</button>
          <button className="btn mt-5 rounded font-bold bg-white text-red-500"><MdDeleteForever />Delete</button>
        </div>
      </div>
      {/* card 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 col-span-2 row-span-1">
        <div className="shadow p-10 rounded-2xl text-center">
          <h1 className="text-2xl font-bold text-[#244d3f]">
            {data.days_since_contact}
          </h1>
          <p className="text-gray-500">Days Since Contact</p>
        </div>
        <div className="shadow p-10 rounded-2xl text-center">
          <h1 className="text-2xl font-bold text-[#244d3f]">{data.goal}</h1>
          <p className="text-gray-500">Goal (Days)</p>
        </div>
        <div className="shadow p-10 rounded-2xl text-center">
          <h1 className="text-2xl font-bold text-[#244d3f]">
            {data.next_due_date}
          </h1>
          <p className="text-gray-500">Next Due</p>
        </div>
      </div>
      {/* card 3 */}
      <div className="shadow flex p-10 rounded-2xl justify-between col-span-2">
        <div className="space-y-4">
          <h1 className="text-[#244d3f] text-2xl">Relationship Goal</h1>
          <p className="text-gray-500">
            Connect every{" "}
            <span className="text-black font-bold">{data.goal} days</span>{" "}
          </p>
        </div>
        <button className="btn">Edit</button>
      </div>
      {/* card 4 */}
      <div className="shadow col-span-2 rounded-2xl p-3">
        <h1 className="text-xl text-[#244d3fFF] mb-3">Quick Check-In</h1>
        <div className="grid grid-cols-3 gap-7">
          <button className="text-2xl shadow p-5 flex flex-col items-center rounded-2xl text-[#1f2937]">
            <IoCall />
            Call
          </button>

          <button className="text-2xl shadow p-5 flex flex-col items-center rounded-2xl text-[#1f2937]">
            <FaMessage />
            Text
          </button>

          <button className="text-2xl shadow p-5 flex flex-col items-center rounded-2xl text-[#1f2937]">
            <IoIosVideocam />
            Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
