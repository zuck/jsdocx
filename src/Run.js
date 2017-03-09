import Element from './Element'
import RunFormat from './RunFormat'
import Text from './Text'

export default class extends Element {
  constructor (format) {
    super({ 'w:r': {} }, '["w:r"]')
    this.setFormat(format || null)
  }

  finalize (contents) {
    if (this.format) contents.unshift(this.format)
  }

  addFormat () {
    let fmt = new RunFormat()
    this.setFormat(fmt)
    return fmt
  }

  setFormat (value) {
    if (!(value instanceof RunFormat || value === null)) {
      throw TypeError('Invalid Run.format')
    }
    this.format = value
  }

  getFormat () {
    return this.format
  }

  addText (str) {
    let t = new Text(str)
    this.contents.push(t)
    return t
  }
}
