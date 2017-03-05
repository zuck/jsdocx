import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#SerializeMixin', () => {
  describe('#src', () => {
    it('should exist after creation', () => {
      let m = new jsdocx.SerializeMixin()
      assert.equal(m.hasOwnProperty('src'), true)
      assert.equal(typeof m.src, 'object')
    })
    it('should contain given content tree', () => {
      let tree = {
        a: 'Foo',
        b: 'Bar'
      }
      let m = new jsdocx.SerializeMixin(tree)
      assert.equal(m.hasOwnProperty('src'), true)
      assert.equal(m.src, tree)
    })
  })
  describe('#toJson', () => {
    it('should return a JSON repr of content tree', () => {
      let m = new jsdocx.SerializeMixin({
        a: 'Foo',
        b: 'Bar',
        'c': [],
        d: 1
      })
      assert.deepEqual(m.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': [],
        'd': 1
      })
    })
  })
  describe('#toXml', () => {
    it('should return a XML repr of content tree', () => {
      let m = new jsdocx.SerializeMixin({
        a: {
          '@foo': 'bar',
          '#': 'Foo'
        },
        b: 'Bar',
        'c': {},
        d: 1
      })
      assert.equal(m.toXml(), '<a foo="bar">Foo</a><b>Bar</b><c></c><d>1</d>')
    })
  })
})
