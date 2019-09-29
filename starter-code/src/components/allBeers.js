import React from "react";

function AllBeers(props) {
  const showBeers = () => {
    return props.beers.map(eachBeer => {
      return (
        <div key={eachBeer._id}>
          <h2>{eachBeer.name}</h2>
          <img style={{ width: "100px" }} src={eachBeer.image_url} alt="beer" />
          <p>Creator : {eachBeer.contributed_by}</p>
        </div>
      );
    });
  };

  return <div>{showBeers()}</div>;
}

export default AllBeers;
