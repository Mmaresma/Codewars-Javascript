// int32 to IPv4
// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript

function int32ToIp(int32){
  let octet1 = (int32 & 0xff000000) >>> 24;
  let octet2 = (int32 & 0x00ff0000) >>> 16;
  let octet3 = (int32 & 0x0000ff00) >>> 8;
  let octet4 = (int32 & 0x000000ff);

  return octet1 + "." + octet2 + "." + octet3 + "." + octet4;
}
