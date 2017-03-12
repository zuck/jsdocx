import Element from './Element'

export default class extends Element {
  constructor (
    type,
    clear
  ) {
    super({ 'w:br': { '#': null } })
    if (type) this.setType(type || null)
    if (clear) this.setClear(clear || null)
  }

  setType (value) {
    if (value) {
      this.src['w:br']['@w:type'] = value
    }
    else {
      delete this.src['w:br']['@w:type']
    }
  }

  getType () {
    return this.src['w:br']['@w:type'] || null
  }

  setClear (value) {
    if (value) {
      this.src['w:br']['@w:clear'] = value
    }
    else {
      delete this.src['w:br']['@w:clear']
    }
  }

  getClear () {
    return this.src['w:br']['@w:clear'] || null
  }
}
