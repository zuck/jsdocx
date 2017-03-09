import Element from './Element'

export default class extends Element {
  constructor (
    ascii,
    cs,
    eastAsia,
    hAnsi
  ) {
    super({ 'w:rFonts': {} })
    if (ascii) this.setAscii(ascii || null)
    if (cs) this.setCs(cs || null)
    if (eastAsia) this.setEastAsia(eastAsia || null)
    if (hAnsi) this.setHAnsi(hAnsi || null)
  }

  setAscii (value) {
    if (value) {
      this.src['w:rFonts']['@w:ascii'] = value
    }
    else {
      delete this.src['w:rFonts']['@w:ascii']
    }
  }

  getAscii () {
    return this.src['w:rFonts']['@w:ascii'] || null
  }

  setCs (value) {
    if (value) {
      this.src['w:rFonts']['@w:cs'] = value
    }
    else {
      delete this.src['w:rFonts']['@w:cs']
    }
  }

  getCs () {
    return this.src['w:rFonts']['@w:cs'] || null
  }

  setEastAsia (value) {
    if (value) {
      this.src['w:rFonts']['@w:eastAsia'] = value
    }
    else {
      delete this.src['w:rFonts']['@w:eastAsia']
    }
  }

  getEastAsia () {
    return this.src['w:rFonts']['@w:eastAsia'] || null
  }

  setHAnsi (value) {
    if (value) {
      this.src['w:rFonts']['@w:hAnsi'] = value
    }
    else {
      delete this.src['w:rFonts']['@w:hAnsi']
    }
  }

  getHAnsi () {
    return this.src['w:rFonts']['@w:hAnsi'] || null
  }
}
