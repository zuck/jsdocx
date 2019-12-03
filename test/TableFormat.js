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
})
