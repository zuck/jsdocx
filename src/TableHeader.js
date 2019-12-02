import Element from './Element'
import TableHeaderColumn from './TableHeaderColumn'

export default class extends Element {
  constructor(
  ) {
    super({ 'w:tblGrid': {} }, '["w:tblGrid"]')
  }

  addColumn () {
    let col = new TableHeaderColumn()
    this.contents.push(col)
    return col
  }
}