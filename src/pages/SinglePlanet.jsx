import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlanetById } from "../services/getTheInfo";

const SinglePlanet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const loadPlanet = async () => {
      try {
        const data = await fetchPlanetById(id);
        setPlanet(data);
      } catch (error) {
        console.error("Error loading planet data:", error);
      }
    };

    loadPlanet();
  }, [id]);

  if (!planet) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h1>{planet.properties.name}</h1>
      <div className="row">
        <div className="col-6">
          <img src="https://picsum.photos/id/47/600/300" alt="" />
        </div>
        <div className="col-6">
          <p>Details about {planet.properties.name}.</p>
          <p>{planet.description}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-2">
          <h6>Name</h6>
          <p>{planet.properties.name}</p>
        </div>
        <div className="col-2">
          <h6>Diameter</h6>
          <p>{planet.properties.diameter}</p>
        </div>
        <div className="col-2">
          <h6>Gravity</h6>
          <p>{planet.properties.gravity}</p>
        </div>
        <div className="col-2">  <h6>Population</h6>
          <p>{planet.properties.population}</p></div>
        <div className="col-2">
          <h6>Terrain</h6>
          <p>{planet.properties.terrain}</p>
        </div>
        <div className="col-2">    <h6>Rotation Period</h6>
          <p>{planet.properties.rotation_period}</p></div>

      </div>




    </div>
  );
};

export default SinglePlanet;
