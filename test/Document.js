import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Document', () => {
  describe('#files', () => {
    it('should exist after creation', () => {
      let doc = new jsdocx.Document()
      assert.equal(doc.hasOwnProperty('files'), true)
      assert.equal(typeof doc.files, 'object')
    })
    it('should contain a "_rels/.rels" entry', () => {
      let doc = new jsdocx.Document()
      assert.equal('_rels/.rels' in doc.files, true)
      // assert.equal(typeof doc.files['_rels/.rels'], 'object')
    })
    it('should contain a "word/_rels/document.xml.rels" entry', () => {
      let doc = new jsdocx.Document()
      assert.equal('word/_rels/document.xml.rels' in doc.files, true)
      // assert.equal(typeof doc.files['word/_rels/document.xml.rels'], 'object')
    })
    it('should contain a "word/document.xml" entry', () => {
      let doc = new jsdocx.Document()
      assert.equal('word/document.xml' in doc.files, true)
      // assert.equal(typeof doc.files['word/document.xml'], 'object')
    })
    it('should contain a "[Content_Types].xml" entry', () => {
      let doc = new jsdocx.Document()
      assert.equal('[Content_Types].xml' in doc.files, true)
      // assert.equal(typeof doc.files['Content_Types.xml'], 'object')
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
