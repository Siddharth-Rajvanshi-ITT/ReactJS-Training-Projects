import React from "react";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PieChart from "../Charts/PieChart";
import StudentProfile from "../StudentProfile";
// import Student from "./Student";

const Dashboard = () => {
  return (
    <div className="section">
      <BarChart />
      <LineChart />
      <PieChart />
      <StudentProfile />
    </div>
  );
};

export default Dashboard;
