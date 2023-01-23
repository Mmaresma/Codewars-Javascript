//JavaScript: 4 kyu - Recover a secret string from random triplets
//https://www.codewars.com/kata/53f40dff5f9d31b81300077

var recoverSecret = function(triplets) {
    // recorremos las tripletas
    for (let [primero] of triplets) {
        // verificamos si la primera letra de la tripleta actual es la primera letra en cualquier otra tripleta
        if (triplets.every(tupla => tupla.indexOf(primero) <= 0)) {
            // eliminamos la primera letra de todas las tripletas que tienen la primera letra igual a la letra actual
            triplets
                .filter(([item]) => item == primero)
                .forEach(tupla => tupla.shift());
            // añadimos la letra actual a la cadena secreta y volvemos a llamar a la función recursivamente con las tripletas actualizadas
            return primero + recoverSecret(triplets.filter(tupla => tupla.length > 0));
        }
    }
    // si no hay más tripletas, retornamos la cadena vacía
    return "";
};
