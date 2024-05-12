import React from "react";
import Card from "../Components/Card";

const DS = ({ data }) => {
  const dsdata = data.filter((ele) => ele.head === "Data Science");
  return (
    <>
      <div className="container">
        <h1 className="text-center p-3 ">Data Science</h1>
        <div className="row">
          {dsdata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DS;
