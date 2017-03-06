import Element from './Element'
import ParagraphFormat from './ParagraphFormat'
import Run from './Run'

export default class extends Element {
  constructor (format) {
    super({ 'w:p': {} }, '["w:p"]')
    this.setFormat(format || null)
  }

  finalize (contents) {
    if (this.format) contents.unshift(this.format)
  }

  addFormat () {
    let fmt = new ParagraphFormat()
    this.setFormat(fmt)
    return fmt
  }

  setFormat (value) {
    if (!(value instanceof ParagraphFormat || value === null)) {
      throw TypeError('Invalid Paragraph.format')
    }
    this.format = value
  }

  getFormat () {
    return this.format
  }

  addRun () {
    let r = new Run()
    this.contents.push(r)
    return r
  }
}
