import { URL } from 'url';

function parsearUrl(laURL) {
    
    const urlObj = new URL(laURL);


    const resultado = {
        host: urlObj.host,              
        pathname: urlObj.pathname,      
        parametros: urlObj.searchParams 
    };

    return resultado;
}


let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
