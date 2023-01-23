//JavaScript: 5 kyu - Extract the domain name from a URL
//https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  // Usar una expresión regular para extraer el nombre de dominio
  var domain = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/)[1].split('.')[0];

  return domain;
}
