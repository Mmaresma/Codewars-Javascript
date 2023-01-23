//JavaScript: 5 kyu - Maximum subarray sum
//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function(vArray){
   let suma=0;
   for (let x=0;x<vArray.length;x++)
     for (let z=1;z<=vArray.length;z++){
		if (vArray.slice(x,z).reduce((a,b)=>a+b,0)>suma){
			suma=vArray.slice(x,z).reduce((a,b)=>a+b,0)
			}
     }
   return suma>0?suma:0
}
