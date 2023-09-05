import React from "react";

const Skeleton = () => {
  return (
    <div className="profileSkeleton">
      <div className="userProfilePicSkeleton"></div>

      <FillDiv count={5} />

      <div className="skillSkeletonContainer">
        <FillDiv count={5} />
      </div>

      <div className="container">
        <FillDiv count={3} />
      </div>
    </div>
  );
};

const FillDiv = (props) => {
  const divs = [];

  for (let i = 0; i < props.count; i++) {
    divs.push(<div key={i} className="fillDiv"></div>);
  }

  return <>{divs}</>;
};

export default Skeleton;
