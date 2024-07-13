function checkSpam(str) {
str = str.toUpperCase();
let firstSpam = '1XBET', secondSpam = 'XXX';
  if ((str.includes(firstSpam) || str.includes(secondSpam))) {
    return true
  } else {
    return false
  }
}
