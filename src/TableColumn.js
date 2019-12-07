import Element from './Element'
import Paragraph from './Paragraph'
import Table from './Table'

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

  addTable () {
    let t = new Table()
    this.contents.push(t)
    return t
  }
}