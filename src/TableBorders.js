import Element from './Element'

function createBorder(style, size, space, color, shadow) {
  return {
    '@w:val': style ? `${style}` : 'single',
    '@w:sz': size ? `${size}` : '0',
    '@w:space': space ? `${space}` : '0',
    '@w:color': color ? `${color}` : '000000',
    '@w:shadow': shadow ? 'true' : 'false'
  }
}

export default class extends Element {
  constructor(
  ) {
    super({ 'w:tblBorders': {} }, '["w:tblBorders"]')
  }

  finalize (contents) {
    if (this.top) contents.unshift(this.top)
    if (this.bottom) contents.unshift(this.bottom)
    if (this.start) contents.unshift(this.start)
    if (this.end) contents.unshift(this.end)
    if (this.hInside) contents.unshift(this.hInside)
    if (this.vInside) contents.unshift(this.vInside)
  }

  setTop(style, size, space, color, shadow) {
    const border = createBorder(style, size, space, color, shadow)
    this.top = new Element({ 'w:top': border }, '["w:top"]')
  }

  setBottom(style, size, space, color, shadow) {
    const border = createBorder(style, size, space, color, shadow)
    this.bottom = new Element({ 'w:bottom': border }, '["w:bottom"]')
  }

  setStart(style, size, space, color, shadow) {
    const border = createBorder(style, size, space, color, shadow)
    this.strat = new Element({ 'w:start': border }, '["w:start"]')
  }

  setEnd(style, size, space, color, shadow) {
    const border = createBorder(style, size, space, color, shadow)
    this.end = new Element({ 'w:end': border }, '["w:end"]')
  }

  setHInside(style, size, space, color, shadow) {
    const border = createBorder(style, size, space, color, shadow)
    this.hInside = new Element({ 'w:insideH': border }, '["w:insideH"]')
  }

  setVInside(style, size, space, color, shadow) {
    const border = createBorder(style, size, space, color, shadow)
    this.vInside = new Element({ 'w:insideV': border }, '["w:insideV"]')
  }
}
