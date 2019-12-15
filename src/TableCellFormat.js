import Element from './Element'

export default class extends Element {
  constructor(
    width,
    widthUnitType,
    hSpanSize,
    vAlign
  ) {
    super({ 'w:tcPr': {} }, '["w:tcPr"]')
    this.setWidth(width, widthUnitType)
    this.setHSpan(hSpanSize)
    this.setVAlign(vAlign)
  }

  finalize (contents) {
    if (this.vAlign) contents.unshift(this.vAlign)
    if (this.gridSpan) contents.unshift(this.gridSpan)
    if (this.width) contents.unshift(this.width)
  }

  setWidth (width, unitType) {
    if (width) {
      this.width = new Element({ 'w:tcW': {
        '@w:type': unitType || 'dxa',
        '@w:w': width
      } }, '["w:tcW"]')
    } else {
      this.width = null
    }
  }

  setHSpan(spanSize) {
    if (spanSize) {
      this.gridSpan = new Element({ 'w:gridSpan': {
        '@w:val': spanSize
      } }, '["w:gridSpan"]')
    } else {
      this.gridSpan = null
    }
  }

  setVAlign(alignment) {
    if (alignment) {
      this.vAlign = new Element({ 'w:vAlign': {
        '@w:val': alignment
      } }, '["w:vAlign"]')
    } else {
      this.vAlign = null
    }
  }
}
