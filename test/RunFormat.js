import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#RunFormat', () => {
  describe('#toJson', () => {
    it('should insert contents inside "w:rPr" tag', () => {
      let f = new jsdocx.RunFormat()
      let e = new jsdocx.Element({ a: 2 })
      f.contents.push(e)
      assert.deepEqual(f.toJson(), { 'w:rPr': { 'a': 2 } })
    })
  })
  describe('#toXml', () => {
    it('should render simple subtree correctly', () => {
      let f = new jsdocx.RunFormat()
      f.addBold()
      f.addItalic()
      f.addFonts().setAscii('Times New Roman')
      f.addShading().setColor('black')
      assert.equal(f.toXml(), '<w:rPr><w:b/><w:i/><w:rFonts w:ascii="Times New Roman"/><w:shd w:color="black"/></w:rPr>')
    })
  })
})
