import Element from './Element'
import Run from './Run'

export default class extends Element {
  constructor () {
    super({ 'w:p': [] }, '["w:p"]')
  }

  addRun () {
    let r = new Run()
    this.contents.push(r)
    return r
  }
}
