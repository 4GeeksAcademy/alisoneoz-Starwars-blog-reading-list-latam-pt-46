import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPersonById } from "../services/getTheInfo";

const SinglePerson = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const loadPerson = async () => {
      try {
        const data = await fetchPersonById(id);
        setPerson(data);
      } catch (error) {
        console.error("Error loading person data:", error);
      }
    };

    loadPerson();
  }, [id]);

  if (!person) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
    <h1>{person.properties.name}</h1>
    <div className="row">
      <div className="col-6">
        <img src="https://picsum.photos/id/64/600/300" alt="" />
      </div>
      <div className="col-6">
        <p>Details about {person.properties.name}.</p>
        <p>{person.description}</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-2">
        <h6>Name</h6>
        <p>{person.properties.name}</p>
      </div>
      <div className="col-2">
        <h6>Gender</h6>
        <p>{person.properties.gender}</p>
      </div>
      <div className="col-2">
        <h6>Birth Year </h6>
        <p>{person.properties.birth_year}</p>
      </div>
      <div className="col-2">  
        <h6>Weight</h6>
        <p>{person.properties.mass}</p></div>
      <div className="col-2">
        <h6>Eye Color</h6>
        <p>{person.properties.eye_color}</p>
      </div>
      <div className="col-2">    
        <h6>Skin Color</h6>
        <p>{person.properties.skin_color}</p></div>

    </div>




  </div>
  );
};

export default SinglePerson;
