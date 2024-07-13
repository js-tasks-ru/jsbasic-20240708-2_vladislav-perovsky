function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newMaxLength = maxlength - 1;
    str = str.substring(0, newMaxLength) + '…';
    return str;
  }
  else {
    return str;
  }
}
