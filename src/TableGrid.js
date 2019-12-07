import Element from './Element'
import TableGridColumn from './TableGridColumn'

export default class extends Element {
  constructor(
  ) {
    super({ 'w:tblGrid': {} }, '["w:tblGrid"]')
  }

  addColumn () {
    let col = new TableGridColumn()
    this.contents.push(col)
    return col
  }
}