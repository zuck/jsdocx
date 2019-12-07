import Element from './Element'
import TableCellFormat from './TableCellFormat'
import Paragraph from './Paragraph'
import Table from './Table'

export default class extends Element {
  constructor(
    format
  ) {
    super({ 'w:tc': {} }, '["w:tc"]')
    this.setFormat(format || null)
  }

  finalize (contents) {
    if (this.format) contents.unshift(this.format)
  }

  addFormat () {
    let fmt = new TableCellFormat()
    this.setFormat(fmt)
    return fmt
  }

  setFormat (value) {
    if (!(value instanceof TableCellFormat || value === null)) {
      throw TypeError('Invalid TableCell.format')
    }
    this.format = value
  }

  getFormat () {
    return this.format
  }

  addParagraph () {
    let p = new Paragraph()
    this.contents.push(p)
    return p
  }

  addTable () {
    let t = new Table()
    this.contents.push(t)
    return t
  }
}