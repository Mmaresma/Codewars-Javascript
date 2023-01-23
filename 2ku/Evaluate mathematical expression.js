//JavaScript: 2 kyu - Evaluate mathematical expression
//https://www.codewars.com/kata/52a78825cdfc2cfc87000005


var calc = function (expresion) {expresion = entradauniforme(expresion);

  while (expresion.includes("(")) {expresion = detectarParentesis(expresion);}
	expresion = entradauniforme(expresion);
	  while (expresion.includes("*") || expresion.includes("/")) 
	  {
		if (expresion.includes("*") && expresion.includes("/")) {
		  if (expresion.indexOf("*") < expresion.indexOf("/")) {
			expresion = encontrarmultiplicaciones(expresion.split(" "));
			expresion = encontrarDivisiones(expresion);
				} else {
			expresion = encontrarDivisiones(expresion.split(" "));
			expresion = encontrarmultiplicaciones(expresion);
		  }
		} else if (expresion.includes("*")) {
		  expresion = encontrarmultiplicaciones(expresion.split(" "));
		} else if (expresion.includes("/")) {
		  expresion = encontrarDivisiones(expresion.split(" "));
		}
	  }
  expresion = secciones_mas_menos(expresion);
  return expresion;
}

//*****************************************************************
// realizar entrada uniforme
//*****************************************************************
var entradauniforme = function(expresion) {
  expresion = expresion.split(" ").join("");
  var restocadena = "";
  for (let variable_i = 0; variable_i < expresion.length; variable_i++) {
    if (expresion[variable_i] === "-" && expresion[variable_i+1] === "-") {
      restocadena += "+";
      variable_i++;
    } else if (expresion[variable_i] === "+" && expresion[variable_i+1] === "-") {
      restocadena += "-";
      variable_i++;
    } else {
      restocadena += expresion[variable_i];
    }
  }
  restocadena = restocadena.replace("/+", "/");
  restocadena = restocadena.replace("*+", "/");
  restocadena = restocadena.replace ("++", "+");
  restocadena = restocadena.replace ("+-", "-");
  var cadenaFinal = "";
    for (let variable_i = 0; variable_i < restocadena.length; variable_i++) {
      if ("*/".includes(restocadena[variable_i]) && "-".includes(restocadena[variable_i+1])) {
        if (restocadena[variable_i] === "/" && restocadena[variable_i+1] === "-") {
          cadenaFinal += "/ -" + restocadena[variable_i+2];
          variable_i+=2;
        } else if (restocadena[variable_i] === "*" && restocadena[variable_i+1] === "-") {
          cadenaFinal += "* -" + restocadena[variable_i+2];
          variable_i+=2;
        }
      } else if ("*/+-".includes(restocadena[variable_i+1]) && "*/+-".includes(restocadena[variable_i-1])) {
        cadenaFinal += " " + restocadena[variable_i] + " ";
      } else if ("*/+-".includes(restocadena[variable_i+1])) {
        cadenaFinal += restocadena[variable_i] + " ";
      } else if ("*/+-".includes(restocadena[variable_i-1])) {
        cadenaFinal += " " + restocadena[variable_i];
      } else {
        cadenaFinal += restocadena[variable_i];
      }
    }
  cadenaFinal = cadenaFinal.replace("* - ", "* -");
  cadenaFinal = cadenaFinal.replace("/ - ", "/ -");
  return cadenaFinal;
}



//*****************************************************************
// función para encontrar paréntesis y calcular lo que hay dentro
//*****************************************************************
var detectarParentesis = function(expresion) {
  var contenido = [];
  var inicio = [];
  var fin = [];
  var contador = 0;
  var secciones = 0;
  var contadorAbierto = 0;
  var contadorCerrado = 0;


  
// obtener los valores de los paréntesis más internos *************
  for (let variable_i = 0; variable_i < expresion.length; variable_i++) {
    if (expresion[variable_i] === "(") {
      if (contador === 0) {
        inicio.push(variable_i);
      } else if (contador > 0) {
        inicio[inicio.length-1] = variable_i;
      } if (contadorCerrado > 0) {
        contadorCerrado--;
      }
      contador++;
    } else if (expresion[variable_i] === ")") {
        if (contadorCerrado === 0) {
          fin.push(variable_i);
          contadorCerrado++;
        }
        contador = 0;
      }
  }
  
	// almacenar el contenido de la matriz interna ***************
  secciones = inicio.length;
  for (variable_i = 0; variable_i < secciones; variable_i++) {
    contenido.push(expresion.slice(inicio[variable_i] + 1, fin[variable_i]));
  }

  var restocadena;

  // calcula cada matriz más interna y reemplace la matriz original
  contenido.forEach(cadena => {
    if (cadena.includes("*") && cadena.includes("/")) {
      if (cadena.indexOf("*") < cadena.indexOf("/")) {
        restocadena = encontrarmultiplicaciones(cadena.split(" "));
        restocadena = encontrarDivisiones(restocadena);
      } else {
        restocadena = encontrarDivisiones(cadena.split(" "));
        restocadena = encontrarmultiplicaciones(restocadena);
      }
      restocadena = secciones_mas_menos(restocadena);
      expresion = expresion.replace("(" + cadena + ")", restocadena);
    } else if (cadena.includes("*")) {
      restocadena = encontrarmultiplicaciones(cadena.split(" "));
      restocadena = secciones_mas_menos(restocadena);
      expresion = expresion.replace("(" + cadena + ")", restocadena);
    } else if (cadena.includes("/")) {
      restocadena = encontrarDivisiones(cadena.split(" "));
      restocadena = secciones_mas_menos(restocadena);
      expresion = expresion.replace("(" + cadena + ")", restocadena);
    } else {
      restocadena = secciones_mas_menos(cadena);
      expresion = expresion.replace("(" + cadena + ")", restocadena);
    }
  });
  return expresion;
}

//*****************************************************************
// función para calcular secciones (+ y -)
//*****************************************************************
var secciones_mas_menos = function(section) {
  var Cadena_Split;
  var numeros = [];
  var operaciones = [];
  if (!Array.isArray(section)) {
    section = section.trim();
    Cadena_Split = section.split(" ");
  } else {
    Cadena_Split = section;
  }

  if (Cadena_Split !== undefined) {
    Cadena_Split.forEach((A,variable_i) => {
      if ("+-".includes(A)) {
        operaciones.push(A);
      } else {
        numeros.push(Number(A));
      }
    });

    let total = numeros[0];

    if (numeros.length === operaciones.length) {
      numeros[0] *= -1;
      total = numeros[0];
      operaciones.shift();
    }
      for (let variable_i = 0; variable_i < numeros.length - 1; variable_i++) {
        if (operaciones[variable_i] === "+") {
          total += numeros[variable_i+1];
        } else if (operaciones[variable_i] === "-") {
          total -= numeros[variable_i+1];
        } else if (!operaciones[variable_i]) {
          numeros[variable_i+1] *= -1;
          total -= numeros[variable_i+1];
        }
      }
    return total;
  }
}

//*****************************************************************
// función para encontrar multiplicaciones y calcularlas
//*****************************************************************
var encontrarmultiplicaciones = function(Cadena_Split) {


  let indiceMultiplicador = [];
  let restoMultiplicador = 1;
  let siguienteOperacion;
  let indiceSiguienteOperacion;

  for (let variable_i = 0; variable_i < Cadena_Split.length; variable_i++)  {
    var n = Cadena_Split[variable_i];
      if (n === "*") {
        indiceMultiplicador.push(variable_i - 1);
        restoMultiplicador = Cadena_Split[variable_i-1];
        restoMultiplicador *= Cadena_Split[variable_i+1];
        if (Cadena_Split[variable_i+2] && Cadena_Split[variable_i+2] === "*") {
          while(Cadena_Split[variable_i+2] === "*") {
            variable_i += 2;
            restoMultiplicador *= Cadena_Split[variable_i+1];
          }
        }
        if (Cadena_Split[variable_i+2] && Cadena_Split[variable_i+2] !== "*") {
          siguienteOperacion = Cadena_Split[variable_i+2];
          indiceSiguienteOperacion = variable_i+2;
          Cadena_Split[indiceMultiplicador[0]] = restoMultiplicador;
          Cadena_Split = Cadena_Split.slice(0, indiceMultiplicador[0]+1).concat(Cadena_Split.slice(indiceSiguienteOperacion, Cadena_Split.length));
          break;
        } else if (!Cadena_Split[variable_i+2]) {
          Cadena_Split[indiceMultiplicador[0]] = restoMultiplicador;
          Cadena_Split = Cadena_Split.slice(0, indiceMultiplicador[0] + 1);
        }
      }
    };

    while (Cadena_Split.includes("*")) {
      Cadena_Split = encontrarmultiplicaciones(Cadena_Split);
    }
    return Cadena_Split;
}


//*****************************************************************
// función para afinar divisiones y calcularlas
//*****************************************************************
var encontrarDivisiones = function(Cadena_Split) {
  let indiceDivision = [];
  let restoDivision = 1;
  let siguienteOperacion;
  let indiceSiguienteOperacion;

  for (let variable_i = 0; variable_i < Cadena_Split.length; variable_i++)  {
    var n = Cadena_Split[variable_i];
      if (n === "/") {
        indiceDivision.push(variable_i - 1);
        restoDivision = Cadena_Split[variable_i-1];
        restoDivision = restoDivision / Cadena_Split[variable_i+1];
        if (Cadena_Split[variable_i+2] && Cadena_Split[variable_i+2] === "/") {
          while(Cadena_Split[variable_i+2] === "/") {
            variable_i += 2;
            restoDivision = restoDivision / Cadena_Split[variable_i+1];
          }
        }
        if (Cadena_Split[variable_i+2] && Cadena_Split[variable_i+2] !== "/") {
          siguienteOperacion = Cadena_Split[variable_i+2];
          indiceSiguienteOperacion = variable_i+2;
          Cadena_Split[indiceDivision[0]] = restoDivision;
          Cadena_Split = Cadena_Split.slice(0, indiceDivision[0]+1).concat(Cadena_Split.slice(indiceSiguienteOperacion, Cadena_Split.length));
          break;
        } else if (!Cadena_Split[variable_i+2]) {
          Cadena_Split[indiceDivision[0]] = restoDivision;
          Cadena_Split = Cadena_Split.slice(0, indiceDivision[0] + 1);
        }
      }
    };
    while (Cadena_Split.includes("/")) {
      Cadena_Split = encontrarDivisiones(Cadena_Split);
    }
    return Cadena_Split;
}
