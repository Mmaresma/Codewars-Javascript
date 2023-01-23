//JavaScript: 5 kyu - Greed is Good
//https://www.codewars.com/kata/5270d0d18625160ada0000e4

function score( DiceGood ) {
 let resultado=0;
 let vArr2=[];
 
 const arr1=DiceGood.sort((num1,num2)=>num1-num2)
 for (let i=1;i<7;i++){ 
	vArr2.push(arr1.slice(arr1.indexOf(i),arr1.lastIndexOf(i)+1))
	}
 let vArr1=vArr2.map(value=>value.length)
 for (let j=0;j<5;j++){
	if(vArr1[0]>=3){ 
		resultado+=1000;
		vArr1[0]-=3;
		}
	if (vArr1[0]>0){
		resultado+=100;
		vArr1[0]-=1
		}
	if(vArr1[1]>=3){
		resultado+=200;
		vArr1[1]-=3
		}
	if(vArr1[2]>=3){ 
		resultado+=300;
		vArr1[2]-=3
		}
	if(vArr1[3]>=3){
		resultado+=400;
		vArr1[3]-=3
		}
	if(vArr1[4]>=3){
		resultado+=500;
		vArr1[4]-=3;
		}
	if (vArr1[4]>0){
		resultado+=50;
		vArr1[4]-=1
		}
	if(vArr1[5]>=3){
		resultado+=600;
		vArr1[5]-=3
		}
	}
 return resultado
}
