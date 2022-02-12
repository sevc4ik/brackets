module.exports = function check(str, bracketsConfig) {
  let stk = [];

  str.split('').forEach(Element => {
    bracketsConfig.find(double => double[0] === stk[stk.length - 1] && double[1] === Element) ? stk.pop() : stk.push(Element)
  }
  );
  return !stk.length;
}