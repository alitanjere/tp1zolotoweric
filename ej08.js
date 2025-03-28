import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './omdb-wrapper.js';

const testOMDB = async () => {
  // Probar la función OMDBSearchByPage con el término 'cars' y página 1
  let resultado = await OMDBSearchByPage("cars", 1);
  console.log("OMDBSearchByPage", resultado);

  // Probar la función OMDBSearchComplete con el término 'batman'
  resultado = await OMDBSearchComplete("batman");
  console.log("OMDBSearchComplete", resultado);

  // Probar la función OMDBGetByImdbID con un ID de IMDB válido
  resultado = await OMDBGetByImdbID("tt0317219"); // Este es el IMDB ID de 'Cars'
  console.log("OMDBGetByImdbID", resultado);
};

// Ejecutar la prueba
testOMDB();
