import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Paragraph', () => {
  describe('#src', () => {
    it('should be equal to "w:p"', () => {
      let p = new jsdocx.Paragraph()
      assert.equal(p.hasOwnProperty('src'), true)
      assert.deepEqual(p.src, { 'w:p': {} })
    })
  })
  describe('#contentHook', () => {
    it('should exist after creation', () => {
      let p = new jsdocx.Paragraph()
      assert.equal(p.hasOwnProperty('contentHook'), true)
      assert.equal(p.contentHook, '["w:p"]')
    })
  })
  describe('#addFormat', () => {
    it('should add a valid format', () => {
      let p = new jsdocx.Paragraph()
      let f = p.addFormat()
      assert.equal(f instanceof jsdocx.ParagraphFormat, true)
    })
  })
  describe('#toJson', () => {
    it('should insert contents inside "w:p" tag', () => {
      let p = new jsdocx.Paragraph()
      let m = new jsdocx.Element({ a: 2 })
      p.contents.push(m)
      assert.deepEqual(p.toJson(), {
        'w:p': {
          '#': [{
            'a': 2
          }]
        }
      })
    })
  })
  describe('#toXml', () => {
    it('should render simple subtree correctly', () => {
      let p = new jsdocx.Paragraph()
      p.addRun().addText('Hello World!')
      assert.equal(p.toXml(), '<w:p><w:r><w:t xml:space="preserve">Hello World!</w:t></w:r></w:p>')
    })
    it('should render with format', () => {
      let p = new jsdocx.Paragraph()
      p.addRun().addText('Hello World!')
      // Format will be injected before any other content.
      p.addFormat().addTabs().addTab()
      assert.equal(p.toXml(), '<w:p><w:pPr><w:tabs><w:tab/></w:tabs></w:pPr><w:r><w:t xml:space="preserve">Hello World!</w:t></w:r></w:p>')
    })
  })
})
