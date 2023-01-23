//JavaScript: 5 kyu - Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(SS) {
var HH = parseInt( SS / 3600 ) ; 	// Horas
var MM = parseInt( SS / 60 ) % 60; 	// Minutos
var SS = SS % 60; 			// Segundos

var formatoAdaptable = function(val){
  return val < 10 ?"0"+val:val;
}

return formatoAdaptable(HH) + ":" +formatoAdaptable(MM) + ":" + formatoAdaptable(SS);
}
