import { IoMdAdd } from "react-icons/io";

const Hero = () => {
  return (
    <div className="mt-10">
      <div className="text-center space-y-5">
        <h1 className="text-2xl md:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244d3f] text-white">
          <IoMdAdd />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="text-center shadow-2xl py-9 rounded-2xl">
          <h1 className="text-2xl font-bold">10</h1>
          <p>Total Friends</p>
        </div>
        <div className="text-center shadow-2xl py-9  rounded-2xl">
          <h1 className="text-2xl font-bold">3</h1>
          <p>On Track</p>
        </div>
        <div className="text-center shadow-2xl py-9 rounded-2xl">
          <h1 className="text-2xl font-bold">6</h1>
          <p>Need Attention</p>
        </div>
        <div className="text-center shadow-2xl py-9 rounded-2xl">
          <h1 className="text-2xl font-bold">12</h1>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
