import { assert } from 'chai'
import jsdocx from '../dist/jsdocx'

describe('#ParagraphFormat', () => {
  describe('#toJson', () => {
    it('should insert contents inside "w:pPr" tag', () => {
      let f = new jsdocx.ParagraphFormat()
      let e = new jsdocx.Element({ a: 2 })
      f.contents.push(e)
      assert.deepEqual(f.toJson(), {
        'w:pPr': {
          '#': [{
            'a': 2
          }]
        }
      })
    })
  })
  describe('#toXml', () => {
    it('should render simple subtree correctly', () => {
      let f = new jsdocx.ParagraphFormat()
      f.addTabs().addTab()
      f.addKeepNext()
      f.addShading().setColor('FF0000')
      assert.equal(f.toXml(), '<w:pPr><w:keepNext/><w:tabs><w:tab/></w:tabs><w:shd w:color="FF0000"/></w:pPr>')
    })
  })
})
