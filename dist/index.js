
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./mococa-toastr.cjs.production.min.js')
} else {
  module.exports = require('./mococa-toastr.cjs.development.js')
}
