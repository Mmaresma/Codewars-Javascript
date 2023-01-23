//JavaScript: 4 kyu - Strip Comments
//https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  const lines = input.split('\n');

  for (let i = 0; i < lines.length; i++) {

    let markerIndex = Number.MAX_VALUE;
    for (const marker of markers) {
      const index = lines[i].indexOf(marker);
      if (index !== -1 && index < markerIndex) {
        markerIndex = index;
      }
    }

    if (markerIndex !== Number.MAX_VALUE) {
      lines[i] = lines[i].slice(0, markerIndex).trim();
    }
  }

  return lines.join('\n');
}
