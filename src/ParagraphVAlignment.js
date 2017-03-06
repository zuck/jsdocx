import Element from './Element'

export default class extends Element {
  constructor (val) {
    super({ 'w:textAlignment': {} }, '["w:textAlignment"]')
    if (val) this.setVal(val || null)
  }

  setVal (value) {
    if (value) {
      this.src['w:textAlignment']['@w:val'] = value
    }
    else {
      delete this.src['w:textAlignment']['@w:val']
    }
  }

  getVal () {
    return this.src['w:textAlignment']['@w:val'] || null
  }
}
