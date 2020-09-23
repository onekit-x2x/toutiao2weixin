const onekit = {}
onekit.trim = function (str) {
  return str.replace(/^\s+|\s+$/gm, '')
}
onekit.color = {}
onekit.color.fix = function (string) {
  let str = string
  if (!str) {
    return null
  }
  switch (str) {
    case 'transparent':
      return 'transparent'// "#00000000";
    case 'black':
      return '#000000'// "#000000FF";
    default:
      break
  }
  if (str.indexOf('rgb') < 0) {
    if (str.length === 7) {
    //  str += "FF";
    }
    return str
  }
  str = str.substring(str.indexOf('(') + 1, str.indexOf(')'))
  const array = str.split(',')
  if (array.length === 3) {
    array.push(1)
  }
  const color = onekit.color.rgba2str(array[0], array[1], array[2], array[3] * 255 + '')
  return color
}
onekit.color.rgba2str = function (r, g, b) {
  function componentToHex(c) {
    c = onekit.trim(c)
    const hex = parseInt(c, 0).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
  //  + componentToHex(a);
}
onekit.color.str2array = function (str) {
  return [parseInt(str.substr(1, 2), 16),
    parseInt(str.substr(3, 2), 16),
    parseInt(str.substr(5, 2), 16),
    parseInt(str.substr(7, 2), 16)]
}
onekit.color.array2str = function (array) {
  function f(v) {
    let s = v.toString(16)
    if (s.length === 1) { s = '0' + s }
    return s
  }
  const str = '#' + f(array[0]) + f(array[1]) + f(array[2])// +f(array[3]);
  return str
}
export default onekit
