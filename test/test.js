import assert from 'assert'

import jsdocx from '../dist/jsdocx'

describe('#Document', () => {
  it('should have a "zip" attribute when created', () => {
    let doc = new jsdocx.Document()
    assert.equal(doc.hasOwnProperty('zip'), true)
    assert.equal(typeof doc.zip, 'object')
  })
  it('should generate a blob if no type is specified', () => {
    let doc = new jsdocx.Document()
    doc.generate().then((content) => {
      assert.equal(typeof content, 'object')
    })
  })
})
