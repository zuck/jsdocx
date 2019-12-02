import Element from './Element'
import Paragraph from './Paragraph'

export default class extends Element {
  constructor(
  ) {
    super({ 'w:tc': {} }, '["w:tc"]')
  }

  addParagraph () {
    let p = new Paragraph()
    this.contents.push(p)
    return p
  }
}