import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error al leer el archivo: ${err}`);
            return;
        }
        fs.writeFile(destino, data, 'utf8', (err) => {
            if (err) {
                console.log(`Error al escribir el archivo: ${err}`);
                return;
            }
            console.log(`El archivo ha sido copiado de '${origen}' a '${destino}'`);
        });
    });
}
