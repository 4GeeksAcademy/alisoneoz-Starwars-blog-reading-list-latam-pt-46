const BASE_URL = "https://swapi.tech/api/";

export const fetchPeople = async () => {
  const response = await fetch(`${BASE_URL}people`);
  const data = await response.json();
  return data.results;
};

export const fetchVehicles = async () => {
  const response = await fetch(`${BASE_URL}vehicles`);
  const data = await response.json();
  return data.results;
};

export const fetchPlanets = async () => {
  const response = await fetch(`${BASE_URL}planets`);
  const data = await response.json();
  return data.results;
};

export const fetchPersonById = async (id) => {
    const response = await fetch(`${BASE_URL}people/${id}`);
    const data = await response.json();
    return data.result;
  };
  
  export const fetchVehicleById = async (id) => {
    const response = await fetch(`${BASE_URL}vehicles/${id}`);
    const data = await response.json();
    return data.result;
  };
  
  export const fetchPlanetById = async (id) => {
    const response = await fetch(`${BASE_URL}planets/${id}`);
    const data = await response.json();
    return data.result;
  };