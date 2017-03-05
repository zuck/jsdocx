import SerializeMixin from './SerializeMixin'
import Text from './Text'

export default class extends SerializeMixin {
  constructor () {
    super({ 'w:r': [] }, '["w:r"]')
  }

  addText (str) {
    let t = new Text(str)
    this.contents.push(t)
    return t
  }
}
