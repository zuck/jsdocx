import Element from './Element'

export default class extends Element {
  constructor (
    after,
    before,
    line,
    lineRule,
    beforeAutospacing,
    afterAutospacing
  ) {
    super({ 'w:spacing': null })
    if (after) this.setAfter(after || null)
    if (before) this.setBefore(before || null)
    if (line) this.setLine(line || null)
    if (lineRule) this.setLineRule(lineRule || null)
    if (beforeAutospacing) this.setBeforeAutospacing(beforeAutospacing || null)
    if (afterAutospacing) this.setAfterAutospacing(afterAutospacing || null)
  }

  setAfter (value) {
    if (value) {
      this.src['w:spacing']['@w:after'] = value
    }
    else {
      delete this.src['w:spacing']['@w:after']
    }
  }

  getAfter () {
    return this.src['w:spacing']['@w:after'] || null
  }

  setBefore (value) {
    if (value) {
      this.src['w:spacing']['@w:before'] = value
    }
    else {
      delete this.src['w:spacing']['@w:before']
    }
  }

  getBefore () {
    return this.src['w:spacing']['@w:before'] || null
  }

  setLine (value) {
    if (value) {
      this.src['w:spacing']['@w:line'] = value
    }
    else {
      delete this.src['w:spacing']['@w:line']
    }
  }

  getLineRule () {
    return this.src['w:spacing']['@w:lineRule'] || null
  }

  setLineRule (value) {
    if (value) {
      this.src['w:spacing']['@w:lineRule'] = value
    }
    else {
      delete this.src['w:spacing']['@w:lineRule']
    }
  }

  getLine () {
    return this.src['w:spacing']['@w:line'] || null
  }

  setAfterAutospacing (value) {
    if (value) {
      this.src['w:spacing']['@w:afterAutospacing'] = value
    }
    else {
      delete this.src['w:spacing']['@w:afterAutospacing']
    }
  }

  getAfterAutospacing () {
    return this.src['w:spacing']['@w:afterAutospacing'] || null
  }

  setBeforeAutospacing (value) {
    if (value) {
      this.src['w:spacing']['@w:beforeAutospacing'] = value
    }
    else {
      delete this.src['w:spacing']['@w:beforeAutospacing']
    }
  }

  getBeforeAutospacing () {
    return this.src['w:spacing']['@w:beforeAutospacing'] || null
  }
}
