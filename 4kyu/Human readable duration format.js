//JavaScript: 4 kyu  - Human readable duration format
//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const components = [];

  const years = Math.floor(seconds / (365 * 24 * 60 * 60));
  if (years > 0) {
    components.push(`${years} year${years > 1 ? "s" : ""}`);
    seconds -= years * 365 * 24 * 60 * 60;
  }
  const days = Math.floor(seconds / (24 * 60 * 60));
  if (days > 0) {
    components.push(`${days} day${days > 1 ? "s" : ""}`);
    seconds -= days * 24 * 60 * 60;
  }
  const hours = Math.floor(seconds / (60 * 60));
  if (hours > 0) {
    components.push(`${hours} hour${hours > 1 ? "s" : ""}`);
    seconds -= hours * 60 * 60;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes > 0) {
    components.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    seconds -= minutes * 60;
  }
  if (seconds > 0) {
    components.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  }

  let result = "";
  for (let i = 0; i < components.length; i++) {
    result += components[i];
    if (i === components.length - 2) {
      result += " and ";
    } else if (i < components.length - 2) {
      result += ", ";
    }
  }
  return result;
}
