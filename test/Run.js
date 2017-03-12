import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Run', () => {
  describe('#src', () => {
    it('should be equal to "w:r"', () => {
      let r = new jsdocx.Run()
      assert.equal(r.hasOwnProperty('src'), true)
      assert.deepEqual(r.src, { 'w:r': {} })
    })
  })
  describe('#contentHook', () => {
    it('should exist after creation', () => {
      let r = new jsdocx.Run()
      assert.equal(r.hasOwnProperty('contentHook'), true)
      assert.equal(r.contentHook, '["w:r"]')
    })
  })
  describe('#addFormat', () => {
    it('should add a valid format', () => {
      let r = new jsdocx.Run()
      let f = r.addFormat()
      assert.equal(f instanceof jsdocx.RunFormat, true)
    })
  })
  describe('#toJson', () => {
    it('should insert contents inside "w:r" tag', () => {
      let r = new jsdocx.Run()
      let m = new jsdocx.Element({ a: 2 })
      r.contents.push(m)
      assert.deepEqual(r.toJson(), {
        'w:r': {
          '#': [{
            'a': 2
          }]
        }
      })
    })
  })
  describe('#toXml', () => {
    it('should render simple subtree correctly', () => {
      let r = new jsdocx.Run()
      r.addText('Hello World!')
      r.addBreak()
      r.addText('Say Hi!')
      assert.equal(r.toXml(), '<w:r><w:t xml:space="preserve">Hello World!</w:t><w:br></w:br><w:t xml:space="preserve">Say Hi!</w:t></w:r>')
      // Waiting for:
      // https://github.com/kawanet/to-xml/issues/1
      // It should be:
      // assert.equal(r.toXml(), '<w:r><w:t xml:space="preserve">Hello World!</w:t><w:br/><w:t xml:space="preserve">Say Hi!</w:t></w:r>')
    })
  })
})
