import Element from './Element'
import Paragraph from './Paragraph'

export default class extends Element {
  constructor(
  ) {
    super({ 'w:gridCol': {} }, '["w:gridCol"]')
  }

  setWidth (value) {
    if (value) {
      this.src['w:gridCol']['@w:w'] = value
    }
    else {
      delete this.src['w:gridCol']['@w:w']
    }
  }

  getWidth () {
    return this.src['w:gridCol']['@w:w'] || null
  }
}