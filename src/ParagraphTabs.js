import Element from './Element'
import ParagraphTab from './ParagraphTab'

export default class extends Element {
  constructor () {
    super({ 'w:tabs': {} }, '["w:tabs"]')
  }

  addTab (tab) {
    let t = new ParagraphTab()
    this.contents.push(t)
    return t
  }
}
