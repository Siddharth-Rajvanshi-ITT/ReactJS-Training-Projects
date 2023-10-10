import React from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const param = useParams();

  const { id } = param;
  return <div>{}</div>;
};

export default Restaurant;
