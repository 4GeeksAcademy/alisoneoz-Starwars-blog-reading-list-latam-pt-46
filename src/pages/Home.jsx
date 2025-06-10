import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchPeople, fetchVehicles, fetchPlanets } from "../services/getTheInfo";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      try {
        setPeople(await fetchPeople());
        setVehicles(await fetchVehicles());
        setPlanets(await fetchPlanets());
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    loadData();
  }, []);

  const handleFavorite = (item) => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: item
    })
  }

  return (
    <div className="container text-center mt-5">
      <h1>Star Wars Entities</h1>

      <section>
        <h2>People</h2>
        <div className="row">
          {people.map(person => (
            <div key={person.uid} className="col-md-3 mb-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/id/65/600/300" />
                <div className="card-body text-start">
                  <h5 className="card-title">{person.name}</h5>
                  <div className=" d-flex justify-content-between">
                    <Link to={`/person/${person.uid}`} className="btn btn-primary">More Info</Link>
                    <button
                      onClick={() => handleFavorite(person)}
                      className="btn btn-success">Favorito</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Vehicles</h2>
        <div className="row">
          {vehicles.map(vehicle => (
            <div key={vehicle.uid} className="col-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/id/183/600/300" />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <div className=" d-flex justify-content-between">
                    <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-primary">More Info</Link>
                    <button
                      onClick={() => handleFavorite(vehicle)}
                      className="btn btn-success">favorito</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Planets</h2>
        <div className="row">
          {planets.map(planet => (
            <div key={planet.uid} className="col-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/id/83/600/300" />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <div className=" d-flex justify-content-between">
                    <Link to={`/planet/${planet.uid}`} className="btn btn-primary">More Info</Link>
                    <button 
                    onClick={()=>handleFavorite(planet)}
                    className="btn btn-success">favorito</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
