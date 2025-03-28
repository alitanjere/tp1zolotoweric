import currencyMap from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    try {
        const moneda = currencyMap.getCurrencyAbbreviation(codigoPais);

        if (!moneda) {
            return null;
        }

        return moneda;  
    } catch (error) {
        console.error(`Error al obtener la moneda: ${error}`);
        return null;
    }
}

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
