var Plugin = function(id, name) {
  this.id = id
  this.name = name
}
Plugin.prototype = {
  show() {
    console.log('show')
  }
}
