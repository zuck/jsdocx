import Element from './Element'
import TableCell from './TableCell'

export default class extends Element {
  constructor(
  ) {
    super({ 'w:tr': {} }, '["w:tr"]')
  }

  addCell () {
    let cell = new TableCell()
    this.contents.push(cell)
    return cell
  }
}