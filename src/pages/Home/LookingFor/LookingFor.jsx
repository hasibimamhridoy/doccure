import React from "react";

const LookingFor = () => {
  return (
    <div className="bg-[#f8f9fa] h-[60vh] p-5">
      <h1 className="text-2xl text-center py-8">What are you looking for?</h1>

      <div className="serviceContainer">
        <div className="card w-96 bg-base-100 shadow-sm rounded">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Doctors Name</h2>
            <p>Location</p>
            <div className="card-actions w-full flex justify-between">
              <button className="btn btn-outline rounded-sm font-bold text-white border-none hover:bg-[#0de0fe] bg-[#0de0fe] w-full">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
