import React from "react";
import Card from "../Components/Card";

const Career = ({ data }) => {
  const careerdata = data.filter((ele) => ele.head === "Career");
  return (
    <>
      <div className="container">
        <h1 className="text-center p-3 ">Career</h1>
        <div className="row">
          {careerdata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Career;
