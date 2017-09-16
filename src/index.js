module.exports = function check(str, brackets) {
  let startBrackets = brackets.reduce((acc, cur) => acc.concat([cur[0]]), []);
  let endBrackets = brackets.reduce((acc, cur) => acc.concat([cur[1]]), []);
  let bracketsLookup = brackets.reduce((acc, cur) => {
    acc[cur[1]] = cur[0]
    return acc;
  }, {});
  let res = [];
  str = str.split("");
  for(let i = 0; i < str.length; i++) {
    if (str[i] === bracketsLookup[str[i]]) {
      if (res.length === 0 || res[res.length - 1] !== str[i]) res.push(str[i]);
      else res.pop();
    } else if (startBrackets.includes(str[i])) res.push(str[i]);
    else if (res.length === 0) return false;
    else if (res[res.length - 1] === bracketsLookup[str[i]]) res.pop();
    else return false;
  }
  return (res.length === 0) ? true : false;
}
