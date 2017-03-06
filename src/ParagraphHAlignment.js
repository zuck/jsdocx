import Element from './Element'

export default class extends Element {
  constructor (val) {
    super({ 'w:jc': {} }, '["w:jc"]')
    if (val) this.setVal(val || null)
  }

  setVal (value) {
    if (value) {
      this.src['w:jc']['@w:val'] = value
    }
    else {
      delete this.src['w:jc']['@w:val']
    }
  }

  getVal () {
    return this.src['w:jc']['@w:val'] || null
  }
}
