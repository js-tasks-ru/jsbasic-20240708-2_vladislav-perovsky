function factorial(n) {
  let result = n;
  if (n > 1) {
  while (n > 1) {
    result = result * (n - 1);
    --n;
  }
  }
  else {
    result = 1
  }
  return result;
}