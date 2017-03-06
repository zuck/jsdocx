import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Text', () => {
  describe('#src', () => {
    it('should be equal to "w:t"', () => {
      let t = new jsdocx.Text()
      assert.equal(t.hasOwnProperty('src'), true)
      assert.deepEqual(t.src, {
        'w:t': {
          '#': null,
          '@xml:space': 'preserve'
        }
      })
    })
  })
  describe('#contentHook', () => {
    it('should exist after creation', () => {
      let t = new jsdocx.Text()
      assert.equal(t.hasOwnProperty('contentHook'), true)
      assert.equal(t.contentHook, '["w:t"]')
    })
  })
  describe('#getString', () => {
    it('should return given string', () => {
      let t = new jsdocx.Text('Hello World!')
      assert.equal(t.getString(), 'Hello World!')
    })
  })
  describe('#setString', () => {
    it('should set internal string with given value', () => {
      let t = new jsdocx.Text()
      t.setString('Hello World!')
      assert.equal(t.getString(), 'Hello World!')
    })
  })
  describe('#getSpaceAttr', () => {
    it('should return "preserve" if not set', () => {
      let t = new jsdocx.Text('Hello World!')
      assert.equal(t.getSpaceAttr(), 'preserve')
    })
  })
  describe('#setSpaceAttr', () => {
    it('should set "xml:space" attr with given value', () => {
      let t = new jsdocx.Text()
      t.setSpaceAttr(null)
      assert.equal(t.getSpaceAttr(), null)
    })
  })
  describe('#toJson', () => {
    it('should return given string as value of "#" child of "w:t" tag', () => {
      let t = new jsdocx.Text('Hello World!')
      assert.deepEqual(t.toJson(), {
        'w:t': {
          '#': 'Hello World!',
          '@xml:space': 'preserve'
        }
      })
    })
    it('should insert given content along with text string', () => {
      let t = new jsdocx.Text('Hello World!')
      let m = new jsdocx.Element({ a: 2 })
      t.contents.push(m)
      assert.deepEqual(t.toJson(), {
        'w:t': {
          '#': 'Hello World!',
          '@xml:space': 'preserve',
          'a': 2
        }
      })
    })
  })
  describe('#toXml', () => {
    it('should render given string correctly', () => {
      let t = new jsdocx.Text('Hello World!')
      assert.equal(t.toXml(), '<w:t xml:space="preserve">Hello World!</w:t>')
    })
  })
})
