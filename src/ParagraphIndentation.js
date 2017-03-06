import Element from './Element'

export default class extends Element {
  constructor (left, right, hanging, firstLine) {
    super({ 'w:ind': {} })
    if (left) this.setLeft(left || null)
    if (right) this.setRight(right || null)
    if (hanging) this.setHanging(hanging || null)
    if (firstLine) this.setFirstLine(firstLine || null)
  }

  setLeft (value) {
    if (value) {
      this.src['w:ind']['@w:left'] = value
    }
    else {
      delete this.src['w:ind']['@w:left']
    }
  }

  getLeft () {
    return this.src['w:ind']['@w:left'] || null
  }

  setRight (value) {
    if (value) {
      this.src['w:ind']['@w:right'] = value
    }
    else {
      delete this.src['w:ind']['@w:right']
    }
  }

  getRight () {
    return this.src['w:ind']['@w:right'] || null
  }

  setHanging (value) {
    if (value) {
      this.src['w:ind']['@w:hanging'] = value
    }
    else {
      delete this.src['w:ind']['@w:hanging']
    }
  }

  getHanging () {
    return this.src['w:ind']['@w:hanging'] || null
  }

  setFirstLine (value) {
    if (value) {
      this.src['w:ind']['@w:firstLine'] = value
    }
    else {
      delete this.src['w:ind']['@w:firstLine']
    }
  }

  getFirstLine () {
    return this.src['w:ind']['@w:firstLine'] || null
  }
}
