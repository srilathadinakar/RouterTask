import React from "react";
import Card from "../Components/Card";

const All = ({ data }) => {
  return (
    <>
      <div className="container">
        <h1 className="text-center p-3 ">All</h1>
        <div className="row">
          {data.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default All;
