import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "D2", value: 50 },
];

export default class PieGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer
        width="100%"
        height={200}
        style={{ textAlign: "center" }}
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={40}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
