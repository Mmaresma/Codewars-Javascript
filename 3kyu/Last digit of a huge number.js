// Last digit of a huge number
// https://www.codewars.com/kata/5518a860a73e708c0a000027/javascript


// función para calcular la exponenciación modular
function Mod(base , exponente, operador) {
    // retornar el resultado de (base  % operador) * (base  % operador)^((exponente+3) % 4) % operador
    return Math.round((base  % operador) * Math.pow((base  % operador), (exponente + 3) % 4)) % operador;
}

// función para calcular el último dígito de una lista de números
function lastDigit(ListaNum) {
    // si la lista está vacía, retornar 1
    if (ListaNum.length == 0) return 1;
    // variables para llevar un registro de los cálculos intermedios
    let laDerechaEscero = false;
    let laDerechaEsMayorQue2 = false;
    let laDerechaMod4 = 1;
    // recorrer la lista de forma inversa
    for (let i = ListaNum.length - 1; i > 0; --i) {
        // si el último dígito es cero, establecer laDerechaMod4 en 1
        if (laDerechaEscero) {
            laDerechaMod4 = 1;
            laDerechaEscero = false;
            laDerechaEsMayorQue2 = false;
        } 
        // de lo contrario, calcular el último dígito utilizando la función Mod
        else {
            laDerechaMod4 = (laDerechaEsMayorQue2 && (ListaNum[i] % 4 === 2)) ? 0 : Mod(ListaNum[i], laDerechaMod4, 4);
            laDerechaEscero = ListaNum[i] === 0;
            laDerechaEsMayorQue2 = !laDerechaEscero && !(ListaNum[i] === 1)
        }
    }

    // si el último dígito es cero, retornar 1
    // de lo contrario, retornar el último dígito de ListaNum[0]^laDerechaMod4
    return laDerechaEscero ? 1 : Mod(ListaNum[0], laDerechaMod4, 10);
}
