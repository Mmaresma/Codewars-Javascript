//JavaScript: 4 kyu - Word, char and line count
//https://www.codewars.com/kata/5286a298f8fc1b7667000c1c

function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function()
{
  let chunk = this.reader.getChunk();
  let prevCh = null;
  let ch = null;

  while (chunk !== "") {
    for (let i = 0; i < chunk.length; i++)  { 
      prevCh = ch;
      ch = chunk[i];
      if (ch !== '\n') {
        this.charCount += 1;
      }      
      
      if ( (ch === ' ' || ch === '\n') && prevCh !== ' ' && prevCh !== '\n' && prevCh != null) {
        this.wordCount += 1; 
      } 
      
      if (ch === '\n') { 
        this.lineCount += 1;
      }
    }

    chunk = this.reader.getChunk(); 
  }

  if (ch != null && ch !== '' && ch !== '\n' && ch !== ' ') {
    this.wordCount += 1;
  }  

  if ((ch != null && ch !== '') || ch === '\n') {
    this.lineCount += 1;  
  }  
};
