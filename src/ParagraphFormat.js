import Element from './Element'
import ParagraphIndentation from './ParagraphIndentation'
import ParagraphKeepLines from './ParagraphKeepLines'
import ParagraphKeepNext from './ParagraphKeepNext'
import ParagraphSpacing from './ParagraphSpacing'
import ParagraphTabs from './ParagraphTabs'
import ParagraphHAlignment from './ParagraphHAlignment'
import ParagraphVAlignment from './ParagraphVAlignment'
import ParagraphShading from './ParagraphShading'

export default class extends Element {
  constructor(
    indentation,
    keepNext,
    keepLines,
    spacing,
    tabs,
    hAlignment,
    vAlignment,
    shading
  ) {
    super({ 'w:pPr': {} }, '["w:pPr"]')
    this.setIndentation(indentation || null)
    this.setKeepNext(keepNext || null)
    this.setKeepLines(keepLines || null)
    this.setSpacing(spacing || null)
    this.setTabs(tabs || null)
    this.setHAlignment(hAlignment || null)
    this.setVAlignment(vAlignment || null)
    this.setShading(shading || null)
  }

  finalize (contents) {
    if (this.indentation) contents.push(this.indentation)
    if (this.keepLines) contents.push(this.keepLines)
    if (this.keepNext) contents.push(this.keepNext)
    if (this.spacing) contents.push(this.spacing)
    if (this.tabs) contents.push(this.tabs)
    if (this.hAlignment) contents.push(this.hAlignment)
    if (this.vAlignment) contents.push(this.vAlignment)
    if (this.shading) contents.push(this.shading)
  }

  addIndentation () {
    let ind = new ParagraphIndentation()
    this.setIndentation(ind)
    return ind
  }

  setIndentation (value) {
    if (!(value instanceof ParagraphIndentation || value === null)) {
      throw TypeError('Invalid ParagraphFormat.indentation')
    }
    this.indentation = value
  }

  getIndentation () {
    return this.indentation
  }

  addKeepLines () {
    let kl = new ParagraphKeepLines()
    this.setKeepLines(kl)
    return kl
  }

  setKeepLines (value) {
    if (!(
      value instanceof ParagraphKeepLines ||
      value === null ||
      value === true
    )) {
      throw TypeError('Invalid ParagraphFormat.keepLines')
    }
    if (value === true) {
      value = new ParagraphKeepLines()
    }
    this.keepLines = value
  }

  getKeepLines () {
    return this.keepLines
  }

  addKeepNext () {
    let kn = new ParagraphKeepNext()
    this.setKeepNext(kn)
    return kn
  }

  setKeepNext (value) {
    if (!(
      value instanceof ParagraphKeepNext ||
      value === null ||
      value === true
    )) {
      throw TypeError('Invalid ParagraphFormat.keepNext')
    }
    if (value === true) {
      value = new ParagraphKeepNext()
    }
    this.keepNext = value
  }

  getKeepNext () {
    return this.keepNext
  }

  addSpacing () {
    let s = new ParagraphSpacing()
    this.setSpacing(s)
    return s
  }

  setSpacing (value) {
    if (!(
      value instanceof ParagraphSpacing ||
      value === null
    )) {
      throw TypeError('Invalid ParagraphFormat.spacing')
    }
    this.spacing = value
  }

  getSpacing () {
    return this.spacing
  }

  addTabs () {
    let ts = new ParagraphTabs()
    this.setTabs(ts)
    return ts
  }

  setTabs (value) {
    if (!(
      value instanceof ParagraphTabs ||
      value === null
    )) {
      throw TypeError('Invalid ParagraphFormat.tabs')
    }
    this.tabs = value
  }

  getTabs () {
    return this.tabs
  }

  addHAlignment () {
    let ha = new ParagraphHAlignment()
    this.setHAlignment(ha)
    return ha
  }

  setHAlignment (value) {
    if (!(
      value instanceof ParagraphHAlignment ||
      value === null
    )) {
      throw TypeError('Invalid ParagraphFormat.hAlignment')
    }
    this.hAlignment = value
  }

  getHAlignment () {
    return this.hAlignment
  }

  addVAlignment () {
    let va = new ParagraphVAlignment()
    this.setVAlignment(va)
    return va
  }

  setVAlignment (value) {
    if (!(
      value instanceof ParagraphVAlignment ||
      value === null
    )) {
      throw TypeError('Invalid ParagraphFormat.vAlignment')
    }
    this.vAlignment = value
  }

  getVAlignment () {
    return this.vAlignment
  }

  addShading () {
    let sh = new ParagraphShading()
    this.setShading(sh)
    return sh
  }

  setShading (value) {
    if (!(
      value instanceof ParagraphShading ||
      value === null
    )) {
      throw TypeError('Invalid ParagraphFormat.shading')
    }
    this.shading = value
  }

  getShading () {
    return this.shading
  }
}
