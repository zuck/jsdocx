import { assert } from 'chai'
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
  describe('#pageSection', () => {
    it('should add a page section to document', () => {
      let doc = new jsdocx.Document()
      assert.equal(doc.root().pageSection instanceof jsdocx.Section, true)
    })
    it('should be added at the end of root file body', () => {
      let doc = new jsdocx.Document()
      doc.addParagraph()
      assert.deepEqual(doc.root().toJson()['w:document']['w:body'], {
        "#": [{
          'w:p': {}
        }, {
          'w:sectPr': {
          }
        }]
      })
    })
    describe('#addCols', () => {
      it('should add cols to page section', () => {
        let doc = new jsdocx.Document()
        doc.addCols().setNum(5)
        assert.equal(doc.root().pageSection.cols.getNum(), 5)
      })
    })
    describe('#addPageMargins', () => {
      it('should add page margins to page section', () => {
        let doc = new jsdocx.Document()
        doc.addPageMargins().setBottom(56)
        assert.equal(doc.root().pageSection.pgMar.getBottom(), 56)
      })
    })
    describe('#addPageSize', () => {
      it('should add page size to page section', () => {
        let doc = new jsdocx.Document()
        doc.addPageSize().setW(19)
        assert.equal(doc.root().pageSection.pgSz.getW(), 19)
      })
    })
  })
  describe('#addParagraph', () => {
    it('should add a valid paragraph', () => {
      let doc = new jsdocx.Document()
      let p = doc.addParagraph()
      assert.equal(p instanceof jsdocx.Paragraph, true)
    })
  })
  describe('#addTable', () => {
    it('should add a valid table', () => {
      let doc = new jsdocx.Document()
      let t = doc.addTable()
      assert.equal(t instanceof jsdocx.Table, true)
    })
  })
  describe('#addSection', () => {
    it('should add a valid section', () => {
      let doc = new jsdocx.Document()
      let s = doc.addSection()
      assert.equal(s instanceof jsdocx.Section, true)
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
