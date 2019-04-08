import render from './mito'
import { isArray, isObject } from './is'

var $ = function(selector) {
  if (isObject(selector)) {
    return selector
  }
  let nodeList = document.querySelectorAll(selector)
  let $el = []
  if (nodeList && nodeList.length > 0) {
    $el = Array.prototype.slice.call(nodeList)
  }

  return Object.assign({}, nodeList, {
    eq(index) {

    },
    css(property, value) {
      for (let i = 0; i < $el.length; i++) {
        $el[i].style[property] = value
      }
      return this
    },
    addClass(className) {
      for (let i = 0; i < $el.length; i++) {
        let name = $el[i].className || ''
        let arr = name.split(' ')
        if (arr.indexOf(className) > -1) {
          continue
        }
        arr.push(className)
        $el[i].className = arr.join(' ')
      }
    },
    removeClass(className) {
      for (let i = 0; i < $el.length; i++) {
        let arr = $el[i].className.split(' ')
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] === className) {
            arr[j] = ''
          }
        }
        $el[i].className = arr.join(' ').trim()
      }
    },
    hasClass(className) {
      let arr = $el.className.split(' ')
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === className) {
          return true
        }
      }
      return false
    },
    on(eventType, fn, useCapture) {
      if (useCapture === undefined) {
        useCapture = false
      }
      if (!isArray($el)) {
        $el = [$el]
      }
      for (let i = 0; i < $el.length; i++) {
        $el[i].addEventListener(eventType, fn, useCapture)
      }
    }
  })
}

$.render = render

window.$ = $
export default $
