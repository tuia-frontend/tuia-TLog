import VConsolePlugin from '../lib/plugin.js'
import $ from '../lib/query.js'
import * as tool from '../lib/tool.js'
import tpl from './activity.html'

const showInfo = function(data) {
  const box = $.one('#vc-activity')
  box.innerHTML = ''
  const msgs = [
    `访问: ${location.href}`,
    `媒体: ${data.appId}`,
    `广告位: ${data.slotId}`,
    `活动: ${data.activityId}`,
    `皮肤: ${data.skinName}`,
    `用户: ${data.consumerId}`,
    `剩余次数: ${data.limitTimes}`,
    `返回拦截: ${data.isIntercept}`
  ]
  for (let i = 0; i < msgs.length; i++) {
    box.append($.render(tpl, {
      msg: msgs[i]
    }))
  }
}
const activityPlugin = new VConsolePlugin('activity', 'activity')

activityPlugin.on('init', () => {

})

activityPlugin.on('renderTab', callback => {
  const container = '<div id="vc-activity"></div>'
  callback(container)
  showInfo(window.CFG)
})

activityPlugin.on('addTool', callback => {
  const btnList = []
  btnList.push({
    name: 'DevicceId',
    onClick: function(event) {
      const guid = tool.guid()
      const url = location.href.replace(/&deviceId=[a-z0-9-]+&/, `&deviceId=${guid}&`)
      location.href = url
    }
  }, {
    name: 'Refresh',
    onClick: function(event) {
      showInfo(window.CFG)
    }
  })
  callback(btnList)
})

export default activityPlugin
