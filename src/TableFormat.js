import Element from './Element'
import TableBorders from './TableBorders'

export default class extends Element {
  constructor(
    borders,
    width,
    widthUnitType
  ) {
    super({ 'w:tblPr': {} }, '["w:tblPr"]')
    this.setBorders(borders || null)
    this.setWidth(width, widthUnitType)
  }

  finalize (contents) {
    if (this.borders) contents.unshift(this.borders)
    if (this.width) contents.unshift(this.width)
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

  setWidth (width, unitType) {
    if (width) {
      this.width = new Element({ 'w:tblW': {
        '@w:type': unitType || 'dxa',
        '@w:w': width
      } }, '["w:tblW"]')
    } else {
      this.width = null
    }
  }
}
