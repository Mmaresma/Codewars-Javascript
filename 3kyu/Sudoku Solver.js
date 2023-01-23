//JavaScript: 3 kyu - Sudoku Solver
//https://www.codewars.com/kata/5296bc77afba8baa690002d7

function sudoku(puzzle) {
  while (puzzle.some(A => A.some(B => B===0 )))  
    for (let C=0; C<9; C++)                         
      for (let F=0; F<9; F++)
        if (puzzle[C][F]===0) {                  
          let B = [true,true,true,true,true,true,true,true,true,true];
          for (let Z = 0; Z<9; Z++) {              
            B[puzzle[C][Z]] = false;             
            B[puzzle[Z][F]] = false;              
          }
          for (let Z=3*~~(F/3); Z<3*(~~(F/3)+1); Z++)   
            for (let j=3*~~(C/3); j<3*(~~(C/3)+1); j++) 
              B[puzzle[j][Z]] = false;                 
          if (B.reduce( (B,c) => B+(c?1:0) ) === 1) 
            puzzle[C][F] = B.indexOf(true);         
        }
  return puzzle;
}
