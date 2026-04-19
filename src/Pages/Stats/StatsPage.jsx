import React, { useContext } from "react";
import { Context } from "../../Component/Context/AllContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import EmptyPage from "../../Component/Shear/EmptyPage";

const StatsPage = () => {
  const { call, text, video } = useContext(Context);

  const total = call + text + video;

  if (total === 0) {
    return <EmptyPage />;
  }
  const data = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  const COLORS = ["#1f2937", "#7c3aed", "#22c55e"];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

      <div className="shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">By Interaction Type</h2>

        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={130}
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
