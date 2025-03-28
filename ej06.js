import { URL } from 'url';

function parsearUrl(laURL) {
    try {
        const urlObj = new URL(laURL);

        return {
            host: urlObj.host,              
            pathname: urlObj.pathname,     
            parametros: urlObj.searchParams 
        };
    } catch (error) {
        console.error("Error al parsear la URL:", error);

        return {
            host: null,
            pathname: null,
            parametros: null
        };
    }
}

let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes'; 
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
