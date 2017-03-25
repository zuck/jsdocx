import Element from './Element'

export default class extends Element {
  constructor (
    bottom,
    footer,
    gutter,
    header,
    left,
    right,
    top
  ) {
    super({ 'w:pgMar': {} })
    if (bottom) this.setBottom(bottom || null)
    if (footer) this.setFooter(footer || null)
    if (gutter) this.setGutter(gutter || null)
    if (header) this.setHeader(header || null)
    if (left) this.setLeft(left || null)
    if (right) this.setRight(right || null)
    if (top) this.setTop(top || null)
  }

  setBottom (value) {
    if (value) {
      this.src['w:pgMar']['@w:bottom'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:bottom']
    }
  }

  getBottom () {
    return this.src['w:pgMar']['@w:bottom'] || null
  }

  setFooter (value) {
    if (value) {
      this.src['w:pgMar']['@w:footer'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:footer']
    }
  }

  getFooter () {
    return this.src['w:pgMar']['@w:footer'] || null
  }

  setGutter (value) {
    if (value) {
      this.src['w:pgMar']['@w:gutter'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:gutter']
    }
  }

  getGutter () {
    return this.src['w:pgMar']['@w:gutter'] || null
  }

  setHeader (value) {
    if (value) {
      this.src['w:pgMar']['@w:header'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:header']
    }
  }

  getHeader () {
    return this.src['w:pgMar']['@w:header'] || null
  }

  setLeft (value) {
    if (value) {
      this.src['w:pgMar']['@w:footer'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:footer']
    }
  }

  getLeft () {
    return this.src['w:pgMar']['@w:footer'] || null
  }

  setRight (value) {
    if (value) {
      this.src['w:pgMar']['@w:right'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:right']
    }
  }

  getRight () {
    return this.src['w:pgMar']['@w:right'] || null
  }

  setTop (value) {
    if (value) {
      this.src['w:pgMar']['@w:top'] = value
    }
    else {
      delete this.src['w:pgMar']['@w:top']
    }
  }

  getTop () {
    return this.src['w:pgMar']['@w:top'] || null
  }
}
