/* 

Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

Ayuda:
Utilizar los métodos diff y format de la librería moment. 
*/

//

// Libreria Moment https://momentjs.com/
// Libreria Day https://day.js.org/

const moment = require("moment");

const dateString = "12/06/1994";

const date = moment(dateString, "DD/MM/YYYY");

console.log(date);

const today = moment();
const diffYears = today.diff(date, "years");
const diffDays = today.diff(date, "days");

console.log(today);
console.log(today.format("DD/MM/YYYY"));
console.log(diffDays);
