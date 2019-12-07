import Element from './Element'
import TableFormat from './TableFormat'
import TableGrid from './TableGrid'
import TableRow from './TableRow'

export default class extends Element {
  constructor (
    format,
    grid
  ) {
    super({ 'w:tbl': {} }, '["w:tbl"]')
    this.setFormat(format || null)
    this.setGrid(grid || null)
  }

  finalize (contents) {
    if (this.grid) contents.unshift(this.grid)
    if (this.format) contents.unshift(this.format)
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

  addGrid () {
    let grid = new TableGrid()
    this.setGrid(grid)
    return grid
  }

  setGrid (value) {
    if (!(value instanceof TableGrid || value === null)) {
      throw TypeError('Invalid Table.grid')
    }
    this.grid = value
  }

  getGrid () {
    return this.grid
  }

  addRow () {
    let row = new TableRow()
    this.contents.push(row)
    return row
  }
}
