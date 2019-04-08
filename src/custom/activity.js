import VConsolePlugin from '../lib/plugin.js'

const activityPlugin = new VConsolePlugin('activity', 'activity')

activityPlugin.on('init', () => {
  console.log('Activity plugin init')
})

activityPlugin.on('renderTab', callback => {
  const html = '<div>Click the tool button below!</div>'
  callback(html)
})

export default activityPlugin
