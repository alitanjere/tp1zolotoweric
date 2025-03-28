import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './omdb-wrapper.js';

const testOMDB = async () => {
  let resultado = await OMDBSearchByPage("cars", 1);
  console.log("OMDBSearchByPage", resultado);

  resultado = await OMDBSearchComplete("batman");
  console.log("OMDBSearchComplete", resultado);

  resultado = await OMDBGetByImdbID("tt0317219"); 
  console.log("OMDBGetByImdbID", resultado);
};

testOMDB();
