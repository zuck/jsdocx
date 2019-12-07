import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#TableFormat', () => {
  describe('#toJson', () => {
    it('should insert contents inside "w:tblPr" tag', () => {
      let f = new jsdocx.TableFormat()
      let e = new jsdocx.Element({ a: 2 })
      f.contents.push(e)
      assert.deepEqual(f.toJson(), {
        'w:tblPr': {
          '#': [{
            'a': 2
          }]
        }
      })
    })
  })
  describe('#toXml', () => {
    it('should render borders correctly', () => {
      let fmt = new jsdocx.TableFormat()
      fmt.addBorders().setStart('single', 12)
      assert.equal(fmt.toXml(), '<w:tblPr><w:tblBorders><w:start w:val="single" w:sz="12" w:space="0" w:color="000000" w:shadow="false"/></w:tblBorders></w:tblPr>')
    })
  })
})
