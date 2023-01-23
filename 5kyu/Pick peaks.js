//JavaScript: 5 kyu - Pick peaks
//https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

function pickPeaks(arr) {
    let pos = [];
    let peaks = [];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            let peak = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < peak) {
                    pos.push(i);
                    peaks.push(peak);
                    break;
                } else if (arr[j] > peak) {
                    peak = arr[j];
                    i = j;
                }
            }
        }
    }
    return { pos, peaks };
}
