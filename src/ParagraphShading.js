import Element from './Element'

export default class extends Element {
  constructor (
    fill,
    color,
    val
  ) {
    super({ 'w:shd': null })
    if (fill) this.setFill(fill || null)
    if (color) this.setColor(color || null)
    if (val) this.setVal(val || null)
  }

  setFill (value) {
    if (value) {
      this.src['w:shd']['@w:fill'] = value
    }
    else {
      delete this.src['w:shd']['@w:fill']
    }
  }

  getFill () {
    return this.src['w:shd']['@w:fill'] || null
  }

  setColor (value) {
    if (value) {
      this.src['w:shd']['@w:color'] = value
    }
    else {
      delete this.src['w:shd']['@w:color']
    }
  }

  getColor () {
    return this.src['w:shd']['@w:color'] || null
  }

  setVal (value) {
    if (value) {
      this.src['w:shd']['@w:val'] = value
    }
    else {
      delete this.src['w:shd']['@w:val']
    }
  }

  getVal () {
    return this.src['w:shd']['@w:val'] || null
  }
}
