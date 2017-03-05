import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Document', () => {
  describe('#src', () => {
    it('should exist after creation', () => {
      let doc = new jsdocx.Document()
      assert.equal(doc.hasOwnProperty('src'), true)
      assert.equal(typeof doc.src, 'object')
    })
    it('should contain a "[Content_Types].xml" attribute', () => {
      let doc = new jsdocx.Document()
      assert.equal(doc.src.hasOwnProperty('[Content_Types].xml'), true)
      // assert.equal(typeof doc.src['Content_Types.xml'], 'object')
    })
  })
  describe('#toZip', () => {
    it('should return a zip archive', () => {
      let doc = new jsdocx.Document()
      let zip = doc.toZip()
      assert.equal(typeof zip, 'object')
    })
  })
  describe('#generate', () => {
    describe('#blob', () => {
      it('should be generated as "blob" if no type is specified', () => {
        let doc = new jsdocx.Document()
        doc.generate().then((content) => {
          assert.equal(typeof content, 'object')
        })
      })
      it('should be "no-empty" by default', () => {
        let doc = new jsdocx.Document()
        doc.generate().then((content) => {
          assert.equal(content.length > 0, true)
        })
      })
    })
  })
})
