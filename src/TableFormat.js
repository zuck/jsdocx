import Element from './Element'
import TableBorders from './TableBorders'

export default class extends Element {
  constructor(
    borders
  ) {
    super({ 'w:tblPr': {} }, '["w:tblPr"]')
    this.setBorders(borders || null)
  }

  finalize (contents) {
    if (this.borders) contents.unshift(this.borders)
  }

  addBorders () {
    let borders = new TableBorders()
    this.setBorders(borders)
    return borders
  }

  setBorders (value) {
    if (!(value instanceof TableBorders || value === null)) {
      throw TypeError('Invalid TableFormat.borders')
    }
    this.borders = value
  }

  getBorders () {
    return this.borders
  }
}
