import { assert } from 'chai'
import * as jsdocx from '../dist/jsdocx'

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
    it('should render outside borders correctly', () => {
      let fmt = new jsdocx.TableFormat()
      fmt.addBorders().setOutside(12)
      assert.equal(fmt.toXml(), '<w:tblPr><w:tblBorders><w:top w:sz="12" w:val="single" w:space="0" w:color="000000" w:shadow="false"/><w:bottom w:sz="12" w:val="single" w:space="0" w:color="000000" w:shadow="false"/><w:start w:sz="12" w:val="single" w:space="0" w:color="000000" w:shadow="false"/><w:end w:sz="12" w:val="single" w:space="0" w:color="000000" w:shadow="false"/></w:tblBorders></w:tblPr>')
    })
    it('should render inside borders correctly', () => {
      let fmt = new jsdocx.TableFormat()
      fmt.addBorders().setInside(12)
      assert.equal(fmt.toXml(), '<w:tblPr><w:tblBorders><w:insideH w:sz="12" w:val="single" w:space="0" w:color="000000" w:shadow="false"/><w:insideV w:sz="12" w:val="single" w:space="0" w:color="000000" w:shadow="false"/></w:tblBorders></w:tblPr>')
    })
    it('should render cell width correctly', () => {
      let fmt = new jsdocx.Table().addFormat()
      fmt.setWidth('33.3%', 'pct')
      assert.equal(fmt.toXml(), '<w:tblPr><w:tblW w:type="pct" w:w="33.3%"/></w:tblPr>')
    })
  })
})
