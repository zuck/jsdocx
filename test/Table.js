import { assert } from 'chai'
import * as jsdocx from '../dist/jsdocx'

describe('#Table', () => {
  describe('#src', () => {
    it('should be equal to "w:tbl"', () => {
      let t = new jsdocx.Table()
      assert.equal(t.hasOwnProperty('src'), true)
      assert.deepEqual(t.src, { 'w:tbl': {} })
    })
  })
  describe('#contentHook', () => {
    it('should exist after creation', () => {
      let t = new jsdocx.Table()
      assert.equal(t.hasOwnProperty('contentHook'), true)
      assert.equal(t.contentHook, '["w:tbl"]')
    })
  })
  describe('#addFormat', () => {
    it('should add a valid format', () => {
      let t = new jsdocx.Table()
      let f = t.addFormat()
      assert.equal(f instanceof jsdocx.TableFormat, true)
    })
  })
  describe('#toJson', () => {
    it('should insert contents inside "w:tbl" tag', () => {
      let t = new jsdocx.Table()
      let m = new jsdocx.Element({ a: 2 })
      t.contents.push(m)
      assert.deepEqual(t.toJson(), {
        'w:tbl': {
          '#': [{
            'a': 2
          }]
        }
      })
    })
  })
  describe('#toXml', () => {
    it('should render simple subtree correctly', () => {
      let t = new jsdocx.Table()
      t.addGrid().addColumn()
      assert.equal(t.toXml(), '<w:tbl><w:tblGrid><w:gridCol></w:gridCol></w:tblGrid></w:tbl>')
    })
    it('should render with format', () => {
      let t = new jsdocx.Table()
      t.addGrid()
      // Format will be injected before any other content.
      t.addFormat()
      assert.equal(t.toXml(), '<w:tbl><w:tblPr></w:tblPr><w:tblGrid></w:tblGrid></w:tbl>')
    })
    it('should render rows correctly', () => {
      let t = new jsdocx.Table()
      t.addRow().addCell()
      t.addRow()
      assert.equal(t.toXml(), '<w:tbl><w:tr><w:tc></w:tc></w:tr><w:tr></w:tr></w:tbl>')
    })
    it('should render cell with format correctly', () => {
      let t = new jsdocx.Table()
      t.addRow().addCell().addFormat()
      assert.equal(t.toXml(), '<w:tbl><w:tr><w:tc><w:tcPr></w:tcPr></w:tc></w:tr></w:tbl>')
    })
    it('should render cell width correctly', () => {
      let fmt = new jsdocx.Table().addRow().addCell().addFormat()
      fmt.setWidth('33.3%', 'pct')
      assert.equal(fmt.toXml(), '<w:tcPr><w:tcW w:type="pct" w:w="33.3%"/></w:tcPr>')
    })
    it('should render cell horizontal span correctly', () => {
      let fmt = new jsdocx.Table().addRow().addCell().addFormat()
      fmt.setHSpan(3)
      assert.equal(fmt.toXml(), '<w:tcPr><w:gridSpan w:val="3"/></w:tcPr>')
    })
    it('should render cell vertical alignment correctly', () => {
      let fmt = new jsdocx.Table().addRow().addCell().addFormat()
      fmt.setVAlign('bottom')
      assert.equal(fmt.toXml(), '<w:tcPr><w:vAlign w:val="bottom"/></w:tcPr>')
    })
  })
})