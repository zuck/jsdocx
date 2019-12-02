import Element from './Element'
import TableFormat from './TableFormat'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export default class extends Element {
  constructor (
    format,
    header
  ) {
    super({ 'w:tbl': {} }, '["w:tbl"]')
    this.setFormat(format || null)
    this.setHeader(header || null)
  }

  finalize (contents) {
    if (this.format) contents.unshift(this.format)
    if (this.header) contents.unshift(this.header)
  }

  addFormat () {
    let fmt = new TableFormat()
    this.setFormat(fmt)
    return fmt
  }

  setFormat (value) {
    if (!(value instanceof TableFormat || value === null)) {
      throw TypeError('Invalid Table.format')
    }
    this.format = value
  }

  getFormat () {
    return this.format
  }

  addHeader () {
    let header = new TableHeader()
    this.setHeader(header)
    return header
  }

  setHeader (value) {
    if (!(value instanceof TableHeader || value === null)) {
      throw TypeError('Invalid Table.header')
    }
    this.header = value
  }

  getHeader () {
    return this.header
  }

  addRow () {
    let row = new TableRow()
    this.contents.push(row)
    return row
  }
}
