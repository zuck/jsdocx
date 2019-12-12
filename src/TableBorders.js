import Element from './Element'

function createBorder(size, style, space, color, shadow) {
  return {
    '@w:sz': size ? `${size}` : '0',
    '@w:val': style ? `${style}` : 'single',
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
    if (this.vInside) contents.unshift(this.vInside)
    if (this.hInside) contents.unshift(this.hInside)
    if (this.end) contents.unshift(this.end)
    if (this.start) contents.unshift(this.start)
    if (this.bottom) contents.unshift(this.bottom)
    if (this.top) contents.unshift(this.top)
  }

  setTop(size, style, space, color, shadow) {
    const border = createBorder(size, style, space, color, shadow)
    this.top = new Element({ 'w:top': border }, '["w:top"]')
  }

  setBottom(size, style, space, color, shadow) {
    const border = createBorder(size, style, space, color, shadow)
    this.bottom = new Element({ 'w:bottom': border }, '["w:bottom"]')
  }

  setStart(size, style, space, color, shadow) {
    const border = createBorder(size, style, space, color, shadow)
    this.start = new Element({ 'w:start': border }, '["w:start"]')
  }

  setEnd(size, style, space, color, shadow) {
    const border = createBorder(size, style, space, color, shadow)
    this.end = new Element({ 'w:end': border }, '["w:end"]')
  }

  setHInside(size, style, space, color, shadow) {
    const border = createBorder(size, style, space, color, shadow)
    this.hInside = new Element({ 'w:insideH': border }, '["w:insideH"]')
  }

  setVInside(size, style, space, color, shadow) {
    const border = createBorder(size, style, space, color, shadow)
    this.vInside = new Element({ 'w:insideV': border }, '["w:insideV"]')
  }

  setOutside(size, style, space, color, shadow) {
    this.setTop(size, style, space, color, shadow)
    this.setStart(size, style, space, color, shadow)
    this.setEnd(size, style, space, color, shadow)
    this.setBottom(size, style, space, color, shadow)
  }

  setInside(size, style, space, color, shadow) {
    this.setHInside(size, style, space, color, shadow)
    this.setVInside(size, style, space, color, shadow)
  }

  setAll(size, style, space, color, shadow) {
    this.setInside(size, style, space, color, shadow)
    this.setOutside(size, style, space, color, shadow)
  }
}
