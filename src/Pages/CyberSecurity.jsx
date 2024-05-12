import React from "react";
import Card from "../Components/Card";

const CyberSecurity = ({ data }) => {
  const cyberdata = data.filter((ele) => ele.head === "Cyber Security");
  return (
    <>
      <div className="container">
        <h1 className="text-center p-3 ">Cyber Security</h1>
        <div className="row">
          {cyberdata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
