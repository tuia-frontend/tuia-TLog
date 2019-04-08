import './index.less'
import render from '../lib/mito.js'
import tpl from './index.html'
import tplTabbar from './tabbar.html'
import tplTabContent from './tabContent.html'

$.render = render
let buoy = '.tlog--buoy'
let mask = '.tlog--mask'
let panel = '.tlog--panel'

export default class {
  constructor() {
    document.body.appendChild($.render(tpl, {}))
    this.$ele = $('#TLog')
    this._bindEvent()
    this.pluginList = {}
    this._initDefaultPlugins()
    this._mock()
  }
  _bindEvent() {
    $(buoy).on('click', () => {
      this.show()
    })

    $(mask).on('click', () => {
      this.hide()
    })
  }
  show() {
    $(panel).css('display', 'block')
    $(mask).css('display', 'block')
    setTimeout(() => {
      this.$ele.addClass('show')
    }, 10)
  }
  hide() {
    this.$ele.removeClass('show')
    setTimeout(() => {
      $(panel).css('display', 'none')
      $(mask).css('display', 'none')
    }, 300)
  }
  _initDefaultPlugins() {
    let plugins = [
      {
        id: 'log',
        name: 'Log'
      },
      {
        id: 'system',
        name: 'System'
      }
    ]
    for (let i = 0; i < plugins.length; i++) {
      this.addPlugin(plugins[i])
    }
    this.showPlugin(plugins[0])
  }
  _initPlugin(plugin) {
    this.pluginList[plugin.id] = plugin
    $('.tlog--tabbar').append($.render(tplTabbar, plugin))
    $('.tlog--content').append($.render(tplTabContent, plugin))
    $(`#tab--${plugin.id}`).on('click', () => {
      this.showPlugin(plugin)
    })
  }
  addPlugin(plugin) {
    if (this.pluginList[plugin.id]) {
      console.debug(`plugin: ${plugin.id} is already existed`)
      return false
    }
    this._initPlugin(plugin)
  }
  showPlugin(plugin) {
    $('.tlog--tab').removeClass('active')
    $(`#tab--${plugin.id}`).addClass('active')
    $('.tlog--logbox').removeClass('active')
    $(`#logbox--${plugin.id}`).addClass('active')
  }
  _mock() {
    var log = console.log
    console.log = msg => {
      log(msg)
      $(`#logbox--log`).append(`<pre class="tlog--pre pre-input">${msg}</pre>`)
    }
  }
}
