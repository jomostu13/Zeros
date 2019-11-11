function f(x) {
  return -1*Math.pow(x,3)+7
}

function df(x) {
  return -3* Math.pow(x,2)
}

function newtonsMethod(x, p) {
  var a = x
  var b;
  do {
    b = a
    a = a - f(a)/df(a)
    console.log(a)
  } while (Math.abs(a-b) > p)
    return a
}


