import Element from './Element'

export default class extends Element {
  constructor (
    val
  ) {
    super({ 'w:color': {} })
    if (val) this.setVal(val || null)
  }

  setVal (value) {
    if (value) {
      this.src['w:color']['@w:val'] = value
    }
    else {
      delete this.src['w:color']['@w:val']
    }
  }

  getVal () {
    return this.src['w:color']['@w:val'] || null
  }
}
