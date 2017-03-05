import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#File', () => {
  describe('#contents', () => {
    it('should exist after creation', () => {
      let f = new jsdocx.File()
      assert.equal(f.hasOwnProperty('contents'), true)
      assert.equal(f.contents instanceof Array, true)
      assert.equal(f.contents.length, 0)
    })
  })
  describe('#contentHook', () => {
    it('should exist after creation', () => {
      let f = new jsdocx.File()
      assert.equal(f.hasOwnProperty('contentHook'), true)
      assert.equal(typeof f.contentHook, 'object')
    })
    it('should be "null" if not specified', () => {
      let f = new jsdocx.File()
      assert.equal(f.contentHook, null)
    })
    it('should be equal to given value', () => {
      let f = new jsdocx.File({ foo: 'bar' }, 'foo')
      assert.equal(f.contentHook, 'foo')
    })
  })
  describe('#toJson', () => {
    it('should be equal to parent\'s result if without contents', () => {
      let src = {
        'a': 'Foo',
        b: 'Bar'
      }
      let f = new jsdocx.File(src)
      let m = new jsdocx.SerializeMixin(src)
      assert.deepEqual(f.toJson(), m.toJson())
    })
    it('should insert content at given hook', () => {
      let f = new jsdocx.File({
        'a': 'Foo',
        b: 'Bar',
        c: {}
      }, '.c')
      let m = new jsdocx.SerializeMixin({
        d: 1
      })
      f.contents.push(m)
      assert.deepEqual(f.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': {
          'd': 1
        }
      })
    })
    it('should append content at given hook when is an array', () => {
      let f = new jsdocx.File({
        'a': 'Foo',
        b: 'Bar',
        c: []
      }, '.c')
      let m = new jsdocx.SerializeMixin({
        d: 1
      })
      f.contents.push(m)
      assert.deepEqual(f.toJson(), {
        'a': 'Foo',
        'b': 'Bar',
        'c': [{
          'd': 1
        }]
      })
    })
    it('should append content at given complex hook', () => {
      let f = new jsdocx.File({
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
      f.contents.push(m)
      assert.deepEqual(f.toJson(), {
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
      let f = new jsdocx.File({
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
      f.contents.push(m)
      assert.deepEqual(f.toJson(), {
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
      let f = new jsdocx.File({
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
      f.contents.push(m1)
      f.contents.push(m2)
      assert.deepEqual(f.toJson(), {
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
      let f = new jsdocx.File({
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
      f.contents.push(m1)
      f.contents.push(m2)
      assert.deepEqual(f.toJson(), {
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
      let f = new jsdocx.File({
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
      f.contents.push(m1)
      f.contents.push(m2)
      assert.deepEqual(f.toJson(), {
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
})
