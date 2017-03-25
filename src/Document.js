import JSZip from 'jszip'
import File from './File'
import Paragraph from './Paragraph'
import Section from './Section'

export default class {
  constructor() {
    this.files = {
      '_rels/.rels': new File({
        "Relationships": {
          "@xmlns": "http://schemas.openxmlformats.org/package/2006/relationships",
          "Relationship": {
            "@Id": "rId1",
            "@Type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
            "@Target": "word/document.xml"
          }
        }
      }),
      'word/_rels/document.xml.rels': new File({
        "Relationships": { "@xmlns": "http://schemas.openxmlformats.org/package/2006/relationships" }
      }),
      'word/document.xml': new File({
        "w:document": {
          "@xmlns:wpc": "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
          "@xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
          "@xmlns:o": "urn:schemas-microsoft-com:office:office",
          "@xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          "@xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
          "@xmlns:v": "urn:schemas-microsoft-com:vml",
          "@xmlns:wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
          "@xmlns:wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
          "@xmlns:w10": "urn:schemas-microsoft-com:office:word",
          "@xmlns:w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
          "@xmlns:w14": "http://schemas.microsoft.com/office/word/2010/wordml",
          "@xmlns:wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
          "@xmlns:wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
          "@xmlns:wne": "http://schemas.microsoft.com/office/word/2006/wordml",
          "@xmlns:wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
          "@mc:Ignorable": "w14 wp14",
          "w:body": {}
        }
      }, '["w:document"]["w:body"]'),
      '[Content_Types].xml': new File({
        "Types": {
          "@xmlns": "http://schemas.openxmlformats.org/package/2006/content-types",
          "Default": [
            {
              "@Extension": "rels",
              "@ContentType": "application/vnd.openxmlformats-package.relationships+xml"
            },
            {
              "@Extension": "xml",
              "@ContentType": "application/xml"
            }
          ],
          "Override": {
            "@PartName": "/word/document.xml",
            "@ContentType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"
          }
        }
      })
    }

    var r = this.root()
    r.pageSection = new Section()
    r.finalize = function (contents) {
      contents.push(this.pageSection)
    }
  }

  root () {
    return this.files['word/document.xml']
  }

  addFile (filename, jsonContent) {
    let f = new File(jsonContent)
    this.files[filename] = f
    return f
  }

  addSection () {
    let s = new Section()
    this.root().contents.push(s)
    return s
  }

  addParagraph () {
    let p = new Paragraph()
    this.root().contents.push(p)
    return p
  }

  addCols () {
    return this.root().pageSection.addCols()
  }

  addPageMargins () {
    return this.root().pageSection.addPageMargins()
  }

  addPageSize () {
    return this.root().pageSection.addPageMargins()
  }

  toZip () {
    let zip = new JSZip()

    Object.keys(this.files).forEach((file) => {
      zip.file(file, this.files[file].toXml())
    })

    return zip
  }

  generate (type) {
    if (typeof type === 'undefined') {
      type = 'blob'
    }
    return this.toZip().generateAsync({ type: type })
  }
}
