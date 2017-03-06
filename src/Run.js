import Element from './Element'
import Text from './Text'

export default class extends Element {
  constructor (format) {
    super({ 'w:r': {} }, '["w:r"]')
  }

  addText (str) {
    let t = new Text(str)
    this.contents.push(t)
    return t
  }
}
