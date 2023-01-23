//JavaScript: 6 kyu - A Rule of Divisibility by 13
//https://www.codewars.com/kata/564057bc348c7200bd0000ff

function thirt(numero) {
    // Secuencia fija de números a utilizar en la operación
    const secuencia = [1, 10, 9, 12, 3, 4];
    // Variable para almacenar el resultado temporal
    let resultado = numero;
    while(1){
        // guardamos el resultado temporal antes de seguir con la operacion
        let temp = resultado;
        // Convertimos el numero a string, lo invertimos, volvemos a unir los elementos en un string, lo volvemos a convertir a array de string 
        // y luego lo transformamos en array de numeros
        resultado = numero
            .toString()
            .split('')
            .reverse()
            .map((digito, indice) => digito * secuencia[indice % 6])
            .reduce((acumulado, valor) => acumulado + valor);
        numero = resultado;
        //si el resultado temporal es igual al resultado actual salimos del while
        if (resultado === temp) {
            break;
        }
    }
    return resultado;
}
