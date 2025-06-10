import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVehicleById } from "../services/getTheInfo";

const SingleVehicle = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const loadVehicle = async () => {
      try {
        const data = await fetchVehicleById(id);
        setVehicle(data);
      } catch (error) {
        console.error("Error loading vehicle data:", error);
      }
    };

    loadVehicle();
  }, [id]);

  if (!vehicle) return <p>Loading...</p>;

  return (
<div className="container mt-5">
      <h1>{vehicle.properties.name}</h1>
      <div className="row">
        <div className="col-6">
          <img src="https://picsum.photos/id/111/600/300" alt="" />
        </div>
        <div className="col-6">
          <p>Details about {vehicle.properties.name}.</p>
          <p>{vehicle.description}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-2">
          <h6>Name</h6>
          <p>{vehicle.properties.name}</p>
        </div>
        <div className="col-2">
          <h6>Model</h6>
          <p>{vehicle.properties.model}</p>
        </div>
        <div className="col-2">
          <h6>Cargo Capacity </h6>
          <p>{vehicle.properties.cargo_capacity}</p>
        </div>
        <div className="col-2">  
          <h6>Manufacturer</h6>
          <p>{vehicle.properties.manufacturer}</p></div>
        <div className="col-2">
          <h6>Vehicle Class</h6>
          <p>{vehicle.properties.vehicle_class}</p>
        </div>
        <div className="col-2">    
          <h6>Passengers</h6>
          <p>{vehicle.properties.passengers}</p></div>

      </div>




    </div>
  );
};

export default SingleVehicle;
