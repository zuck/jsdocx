import assert from 'assert'
import jsdocx from '../dist/jsdocx'

describe('#Section', () => {
  describe('#src', () => {
    it('should be equal to "w:sectPr"', () => {
      let s = new jsdocx.Section()
      assert.equal(s.hasOwnProperty('src'), true)
      assert.deepEqual(s.src, { 'w:sectPr': {} })
    })
  })
  describe('#contentHook', () => {
    it('should be equal to "w:sectPr" after creation', () => {
      let s = new jsdocx.Section()
      assert.equal(s.hasOwnProperty('contentHook'), true)
      assert.equal(s.contentHook, '["w:sectPr"]')
    })
  })
  describe('#addParagraph', () => {
    it('should add a valid format', () => {
      let s = new jsdocx.Section()
      let p = s.addParagraph()
      assert.equal(p instanceof jsdocx.Paragraph, true)
    })
  })
  describe('#toJson', () => {
    it('should render "w:sectPr" normally if no paragraphs are added', () => {
      let s = new jsdocx.Section()
      s.addCols().setNum(2)
      assert.deepEqual(s.toJson(), {
        'w:sectPr': {
          '#': [{
            'w:cols': {
              '@w:num': 2
            }
          }]
        }
      })
    })
    it('should insert "w:sectPr" tag inside last paragraph\'s props', () => {
      let s = new jsdocx.Section()
      s.addCols().setNum(2)
      let p1 = s.addParagraph()
      let p2 = s.addParagraph()
      assert.deepEqual(s.toJson(), [
        {
          'w:p': {
          }
        }, {
          'w:p': {
            '#': [{
              'w:pPr': {
                '#': [
                  {
                    'w:sectPr': {
                      '#': [{
                        'w:cols': {
                          '@w:num': 2
                        }
                      }]
                    }
                  }
                ]
              }
            }]
          }
        }
      ])
    })
  })
  describe('#toXml', () => {
    it('should render simple subtree correctly', () => {
      let s = new jsdocx.Section()
      s.addParagraph().addRun().addText('Hello World!')
      s.addParagraph()
      assert.equal(s.toXml(), '<w:p><w:r><w:t xml:space="preserve">Hello World!</w:t></w:r></w:p><w:p><w:pPr><w:sectPr></w:sectPr></w:pPr></w:p>')
    })
    it('should render respecting previous paragraph\'s format', () => {
      let s = new jsdocx.Section()
      s.addCols().setNum(2)
      let p = s.addParagraph()
      p.addRun().addText('Hello World!')
      // Format will be injected before any other content.
      p.addFormat().addTabs().addTab()
      assert.equal(s.toXml(), '<w:p><w:pPr><w:sectPr><w:cols w:num="2"/></w:sectPr><w:tabs><w:tab/></w:tabs></w:pPr><w:r><w:t xml:space="preserve">Hello World!</w:t></w:r></w:p>')
    })
  })
})
