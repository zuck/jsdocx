var assert = require('chai').assert
var jsdocx = require('../dist/jsdocx')

describe('#ES5', () => {
  describe('#require', () => {
    it('should import the library', () => {
      let doc = new jsdocx.Document()
      assert.equal(doc.hasOwnProperty('files'), true)
      assert.equal(typeof doc.files, 'object')
    })
  })
})