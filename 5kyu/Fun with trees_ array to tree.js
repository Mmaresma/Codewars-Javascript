//JavaScript: 5 kyu - Fun with trees: array to tree
//https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd

function arrayToTree(valores, num = 0) {
  if (num >= valores.length) {
	  return;
  } else  {
  return new TreeNode(valores[num], arrayToTree(valores, 2 * num + 1),
                                 arrayToTree(valores, 2 * num + 2));
	}
}
