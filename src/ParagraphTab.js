import Element from './Element'

export default class extends Element {
  constructor (
    leader,
    pos,
    val
  ) {
    super({ 'w:tab': null })
    if (leader) this.setLeader(leader || null)
    if (pos) this.setPos(pos || null)
    if (val) this.setVal(val || null)
  }

  setLeader (value) {
    if (value) {
      this.src['w:tab']['@w:leader'] = value
    }
    else {
      delete this.src['w:tab']['@w:leader']
    }
  }

  getLeader () {
    return this.src['w:tab']['@w:leader'] || null
  }

  setPos (value) {
    if (value) {
      this.src['w:tab']['@w:pos'] = value
    }
    else {
      delete this.src['w:tab']['@w:pos']
    }
  }

  getPos () {
    return this.src['w:tab']['@w:pos'] || null
  }

  setVal (value) {
    if (value) {
      this.src['w:tab']['@w:val'] = value
    }
    else {
      delete this.src['w:tab']['@w:val']
    }
  }

  getVal () {
    return this.src['w:tab']['@w:val'] || null
  }
}
