import React from "react";
import { useParams } from "react-router-dom";
import studentData from "../../Data/StudentData";
import PageNotFound from "./PageNotFound";

const Student = () => {
  const params = useParams();
  let studentName = "";

  for (let i = 0; i < studentData.length; i++) {
    if (params.studentName === studentData[i].name) {
      studentName = params.studentName;
      break;
    }
  }

  return (
    <div className="section">
      {studentName ? studentName : <PageNotFound />}
    </div>
  );
};

export default Student;
