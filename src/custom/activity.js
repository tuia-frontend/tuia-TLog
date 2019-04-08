import VConsolePlugin from '../lib/plugin.js'

const activityPlugin = new VConsolePlugin('activity', 'activity')

activityPlugin.on('init', () => {
  console.log('Activity plugin init')
})

activityPlugin.on('renderTab', callback => {
  var html = '<div>Click the tool button below!</div>'
  callback(html)
})

activityPlugin.on('addTool', callback => {
  const btnList = []
  btnList.push({
    name: 'Reload',
    onClick: function(event) {
      location.reload()
    }
  })
  callback(btnList)
})

export default activityPlugin
