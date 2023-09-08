import React from "react";
import { useNavigate } from "react-router-dom";
import studentData from "../Data/StudentData";

const StudentProfile = () => {
  const navigate = useNavigate();

  const handleClick = (student) => {
    navigate(`${student}`);
  };

  return (
    <div className="studentProfile">
      {studentData.map((student, index) => {
        console.log(student.name);
        return (
          <div className="studentCard" key={index}>
            <div className="studentImageContainer">
              <img
                src={student.image}
                alt=""
                className="studentProfilePic"
              ></img>
            </div>
            <p>
              <b>Name: </b> {student.name}
            </p>
            <p>
              <b>Class: </b> {student.class}
            </p>
            <p>
              <b>Roll Number: </b> {student.rollNo}
            </p>
            <p>
              <b>Age: </b> {student.age}
            </p>
            <p>
              <b>Rank: </b> {student.rank}
            </p>
            <button
              className="viewProfileBtn"
              onClick={() => handleClick(student.name)}
            >
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default StudentProfile;
