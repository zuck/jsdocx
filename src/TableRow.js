import Element from './Element'
import TableColumn from './TableColumn'

export default class extends Element {
  constructor(
  ) {
    super({ 'w:tr': {} }, '["w:tr"]')
  }

  addColumn () {
    let col = new TableColumn()
    this.contents.push(col)
    return col
  }
}