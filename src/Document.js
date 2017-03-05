import JSZip from 'jszip'
import { toXML } from 'to-xml'

export default class {
  constructor() {
    this.src = {
      '_rels': {
        '.rels': {
          "Relationships": {
            "@xmlns": "http://schemas.openxmlformats.org/package/2006/relationships",
            "Relationship": {
              "@Id": "rId1",
              "@Type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
              "@Target": "word/document.xml"
            }
          }
        }
      },
      'word': {
        '_rels': {
          'document.xml.rels': {
            "Relationships": { "@xmlns": "http://schemas.openxmlformats.org/package/2006/relationships" }
          }
        },
        'document.xml': {
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
            "w:body": {
            }
          }
        }
      },
      '[Content_Types].xml': {
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
      }
    }
  }

  toZip () {
    let zip = new JSZip()

    // ./_rels
    zip.file('_rels/.rels', toXML(
      this.src['_rels']['.rels']
    ))

    // ./word
    zip.file('word/_rels/document.xml.rels', toXML(
      this.src['word']['_rels']['document.xml.rels']
    ))
    zip.file('word/document.xml', toXML(
      this.src['word']['document.xml']
    ))

    // ./[Content_Types].xml
    zip.file('[Content_Types].xml', toXML(
      this.src['[Content_Types].xml']
    ))

    return zip
  }

  generate (type) {
    if (typeof type === 'undefined') {
      type = 'blob'
    }
    return this.toZip().generateAsync({ type: type })
  }
}
