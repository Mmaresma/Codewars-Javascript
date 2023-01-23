//JavaScript: 5 kyu - Linked Lists - Alternating Split
//https://www.codewars.com/kata/55dd5386575839a74f0000a9

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(cabecera) {
  if (!cabecera || !cabecera.next) {
	  throw new Error('invalid arguments')
  }
  return new Context(split(cabecera), split(cabecera.next))
}

function split(cabecera) {
  const list = new Node(cabecera.data)
  if (cabecera.next && cabecera.next.next){
	  list.next = split(cabecera.next.next)
  }
  return list
}
