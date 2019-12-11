import { assert } from 'chai'
import jsdocx from '../dist/jsdocx'

describe('#ES6', () => {
  describe('#import', () => {
    it('should import the library', () => {
      let doc = new jsdocx.Document()
      assert.equal(doc.hasOwnProperty('files'), true)
      assert.equal(typeof doc.files, 'object')
    })
  })
})