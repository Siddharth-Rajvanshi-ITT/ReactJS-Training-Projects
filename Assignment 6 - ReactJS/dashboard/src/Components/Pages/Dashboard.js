import React from "react";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PieChart from "../Charts/PieChart";
import StudentProfile from "../StudentProfile";
// import Student from "./Student";

const Dashboard = () => {
  return (
    <div className="section">
      <h1>Welcome To Your Dashboard</h1>
      <h2>Check your attendance</h2>
      <div className="dashboard">
        <BarChart />
        <LineChart />
        <PieChart />
        <h1>Your Students</h1>
        <StudentProfile />
      </div>
    </div>
  );
};

export default Dashboard;
