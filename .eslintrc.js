module.exports = {
  root: true, 
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  rules: {
    'space-before-function-paren': ['error', 'never']
  },
  globals: {
    $: true,
    alert: true,
    HTMLElement: true,
    localStorage: true,
    sessionStorage: true,
    location: true
  }
}