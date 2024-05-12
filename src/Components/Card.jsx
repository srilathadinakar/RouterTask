import React from "react";

const Card = ({ element, index }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 mb-4 ">
        <div key={element.id}>
          <div className="card h-100">
            <img src={element.image} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title pb-2 ">{element.title}</h5>
              <p><span className="text-muted">By </span>{element.author}</p>
              <p>{element.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
