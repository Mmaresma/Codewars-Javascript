//JavaScript: 5 kyu - Can you get the loop ?
//https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

function loop_size(node) {
    let slow = node;
    let fast = node;
    // Busca el inicio del bucle
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        break;
      }
    }
    // Si no hay bucle, regresa 0
    if (fast === null || fast.next === null) {
      return 0;
    }
    // Encuentra el tamaño del bucle
    let count = 1;
    slow = slow.next;
    while (slow !== fast) {
      slow = slow.next;
      count++;
    }
  
    return count;
  }