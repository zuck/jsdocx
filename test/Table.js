import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Table', () => {
  describe('#src', () => {
    it('should be equal to "w:tbl"', () => {
      let t = new jsdocx.Table()
      assert.equal(t.hasOwnProperty('src'), true)
      assert.deepEqual(t.src, { 'w:tbl': {} })
    })
  })
})