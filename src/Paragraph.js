import SerializeMixin from './SerializeMixin'
import Run from './Run'

export default class extends SerializeMixin {
  constructor () {
    super({ 'w:p': [] }, '["w:p"]')
  }

  addRun () {
    let r = new Run()
    this.contents.push(r)
    return r
  }
}
