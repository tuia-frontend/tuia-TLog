export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}
export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}
export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
export function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}
export function isUndefined(value) {
  return value === undefined
}
export function isNull(value) {
  return value === null
}
export function isSymbol(value) {
  return Object.prototype.toString.call(value) === '[object Symbol]'
}
export function isObject(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]' ||
    // if it isn't a primitive value, then it is a common object
    (
      !isNumber(value) &&
      !isString(value) &&
      !isBoolean(value) &&
      !isArray(value) &&
      !isNull(value) &&
      !isFunction(value) &&
      !isUndefined(value) &&
      !isSymbol(value)
    )
  )
}
export function isFunction(value) {
  return Object.prototype.toString.call(value) === '[object Function]'
}
export function isElement(value) {
  return (
    typeof HTMLElement === 'object' ? value instanceof HTMLElement // DOM2
      : value && typeof value === 'object' && value !== null && value.nodeType === 1 && typeof value.nodeName === 'string'
  )
}
export function isWindow(value) {
  var toString = Object.prototype.toString.call(value)
  return toString === '[object global]' || toString === '[object Window]' || toString === '[object DOMWindow]'
}
