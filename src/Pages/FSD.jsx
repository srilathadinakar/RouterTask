import React from "react";
import Card from "../Components/Card";

const FSD = ({ data }) => {
  const fsddata = data.filter((ele) => ele.head === "Full Stack Development");
  return (
    <>
      <div className="container">
        <h1 className="text-center p-3 ">Full Stack Development</h1>
        <div className="row">
          {fsddata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FSD;
