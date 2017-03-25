import Element from './Element'

export default class extends Element {
  constructor (
    val
  ) {
    super({ 'w:type': {} })
    if (val) this.setVal(val || null)
  }

  setVal (value) {
    if (value) {
      this.src['w:type']['@w:val'] = value
    }
    else {
      delete this.src['w:type']['@w:val']
    }
  }

  getVal () {
    return this.src['w:type']['@w:val'] || null
  }
}
