import Element from './Element'

export default class extends Element {
  constructor (
    w,
    h,
    orient
  ) {
    super({ 'w:pgSz': {} })
    if (w) this.setW(bottom || null)
    if (h) this.setH(footer || null)
    if (orient) this.setOrient(orient || null)
  }

  setW (value) {
    if (value) {
      this.src['w:pgSz']['@w:w'] = value
    }
    else {
      delete this.src['w:pgSz']['@w:w']
    }
  }

  getW () {
    return this.src['w:pgSz']['@w:w'] || null
  }

  setH (value) {
    if (value) {
      this.src['w:pgSz']['@w:h'] = value
    }
    else {
      delete this.src['w:pgSz']['@w:h']
    }
  }

  getH () {
    return this.src['w:pgSz']['@w:h'] || null
  }

  setOrient (value) {
    if (value) {
      this.src['w:pgSz']['@w:orient'] = value
    }
    else {
      delete this.src['w:pgSz']['@w:orient']
    }
  }

  getOrient () {
    return this.src['w:pgSz']['@w:orient'] || null
  }
}
