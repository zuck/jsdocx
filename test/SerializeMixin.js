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
  describe('#contents', () => {
    it('should exist after creation', () => {
      let p = new jsdocx.SerializeMixin()
      assert.equal(p.hasOwnProperty('contents'), true)
      assert.equal(p.contents instanceof Array, true)
      assert.equal(p.contents.length, 0)
    })
  })
  describe('#contentHook', () => {
    it('should exist after creation', () => {
      let p = new jsdocx.SerializeMixin()
      assert.equal(p.hasOwnProperty('contentHook'), true)
      assert.equal(typeof p.contentHook, 'object')
    })
    it('should be "null" if not specified', () => {
      let p = new jsdocx.SerializeMixin()
      assert.equal(p.contentHook, null)
    })
    it('should be equal to given value', () => {
      let p = new jsdocx.SerializeMixin({ foo: 'bar' }, '.foo')
      assert.equal(p.contentHook, '.foo')
    })
    it('should throw a TypeError if invalid', () => {
      assert.throws(() => {
        new jsdocx.SerializeMixin({}, 'a')
      }, TypeError)
    })
  })
  describe('#toJson', () => {
    it('should transfrom "src" in valid JSON syntax', () => {
      let src = {
        'a': 'Foo',
        b: 'Bar'
      }
      let m = new jsdocx.SerializeMixin(src)
      assert.deepEqual(m.toJson(), {
        'a': 'Foo',
        'b': 'Bar'
      })
    })
    it('should insert content at given hook', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: {}
      }, '.c')
      let m = new jsdocx.SerializeMixin({
        d: 1
      })
      p.contents.push(m)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd': 1
        }
      })
    })
    it('should append content at given hook when is an array', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: []
      }, '.c')
      let m = new jsdocx.SerializeMixin({
        d: 1
      })
      p.contents.push(m)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': [{
          'd': 1
        }]
      })
    })
    it('should append content at given complex hook', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: {
          d: {
            e: {
            }
          }
        }
      }, '.c.d.e')
      let m = new jsdocx.SerializeMixin({
        f: 1
      })
      p.contents.push(m)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd': {
            'e': {
              'f': 1
            }
          }
        }
      })
    })
    it('should append content at given complex hook when is an array', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: {
          d: {
            e: []
          }
        }
      }, '.c.d.e')
      let m = new jsdocx.SerializeMixin({
        f: 1
      })
      p.contents.push(m)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd': {
            'e': [{
              'f': 1
            }]
          }
        }
      })
    })
    it('should insert more contents at given hook', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: {
          d: {
            e: {
            }
          }
        }
      }, '.c.d.e')
      let m1 = new jsdocx.SerializeMixin({
        f: 1
      })
      let m2 = new jsdocx.SerializeMixin({
        'g': 2
      })
      p.contents.push(m1)
      p.contents.push(m2)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd': {
            'e': {
              'f': 1,
              'g': 2
            }
          }
        }
      })
    })
    it('should insert more contents at given hook when is an array', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: {
          d: {
            e: []
          }
        }
      }, '.c.d.e')
      let m1 = new jsdocx.SerializeMixin({
        f: 1
      })
      let m2 = new jsdocx.SerializeMixin({
        'g': 2
      })
      p.contents.push(m1)
      p.contents.push(m2)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd': {
            'e': [{
              'f': 1
            }, {
              'g': 2
            }]
          }
        }
      })
    })
    it('should insert contents at given hook when string keys are used', () => {
      let p = new jsdocx.SerializeMixin({
        'a': 'Foo',
        b: 'Bar',
        c: {
          'd.e': {
            'f': []
          }
        }
      }, '.c["d.e"].f')
      let m1 = new jsdocx.SerializeMixin({
        g: 1
      })
      let m2 = new jsdocx.SerializeMixin({
        h: 2
      })
      p.contents.push(m1)
      p.contents.push(m2)
      assert.deepEqual(p.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd.e': {
            'f': [{
              'g': 1
            }, {
              'h': 2
            }]
          }
        }
      })
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
    it('should return a XML repr of full content tree (with children)', () => {
      let p = new jsdocx.SerializeMixin({
        a: {
          '@foo': 'bar',
          '#': 'Foo'
        },
        b: 'Bar',
        'c': {},
        d: 1
      }, '.c')
      let m = new jsdocx.SerializeMixin({
        e: 2
      })
      p.contents.push(m)
      assert.equal(p.toXml(), '<a foo="bar">Foo</a><b>Bar</b><c><e>2</e></c><d>1</d>')
    })
  })
})
