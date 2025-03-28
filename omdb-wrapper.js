import axios from "axios";

const APIKEY = "984a878"; 

const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);

    if (apiResponse.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = apiResponse.data.totalResults;
      returnObject.datos = apiResponse.data.Search;
    }
  } catch (error) {
    console.error("Error en la búsqueda por página:", error);
  }

  return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    const apiResponse = await axios.get(requestString);

    if (apiResponse.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = apiResponse.data.totalResults;
      returnObject.datos = apiResponse.data.Search;
    }
  } catch (error) {
    console.error("Error en la búsqueda completa:", error);
  }

  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
    respuesta: false,
    datos: {}
  };

  try {
    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    const apiResponse = await axios.get(requestString);

    if (apiResponse.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = apiResponse.data;
    }
  } catch (error) {
    console.error("Error al obtener datos por IMDB ID:", error);
  }

  return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
