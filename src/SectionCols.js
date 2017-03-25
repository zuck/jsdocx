import Element from './Element'

export default class extends Element {
  constructor (
    equalWidth,
    num,
    sep,
    space
  ) {
    super({ 'w:cols': {} })
    this.setEqualWidth(equalWidth || null)
    this.setNum(num || null)
    this.setSep(sep || null)
    this.setSpace(space || null)
  }

  setEqualWidth (value) {
    if (value) {
      this.src['w:cols']['@w:equalWidth'] = value
    }
    else {
      delete this.src['w:cols']['@w:equalWidth']
    }
  }

  getEqualWidth () {
    return this.src['w:cols']['@w:equalWidth'] || null
  }

  setNum (value) {
    if (value) {
      this.src['w:cols']['@w:num'] = value
    }
    else {
      delete this.src['w:cols']['@w:num']
    }
  }

  getNum () {
    return this.src['w:cols']['@w:num'] || null
  }

  setSep (value) {
    if (value) {
      this.src['w:cols']['@w:sep'] = value
    }
    else {
      delete this.src['w:cols']['@w:sep']
    }
  }

  getSep () {
    return this.src['w:cols']['@w:sep'] || null
  }

  setSpace (value) {
    if (value) {
      this.src['w:cols']['@w:space'] = value
    }
    else {
      delete this.src['w:cols']['@w:space']
    }
  }

  getSpace () {
    return this.src['w:cols']['@w:space'] || null
  }
}
