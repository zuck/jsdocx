import Element from './Element'
import SectionCols from './SectionCols'
import SectionType from './SectionType'
import PageMargins from './PageMargins'
import PageSize from './PageSize'
import Paragraph from './Paragraph'
import Table from './Table'

export default class extends Element {
  constructor (
    cols,
    pgMar,
    pgSz,
    type
  ) {
    super({ 'w:sectPr': {} }, '["w:sectPr"]')
    this.setCols(cols || null)
    this.setPageMargins(pgMar || null)
    this.setPageSize(pgSz || null)
    this.setType(type || null)
  }

  finalize (contents) {
    if (this.cols) contents.push(this.cols)
    if (this.pgMar) contents.push(this.pgMar)
    if (this.pgSz) contents.push(this.pgSz)
    if (this.type) contents.push(this.type)
  }

  toJson () {
    let realContents = this.contents.filter((c) => { return c !== null })
    // If a section contains any paragraph, it renders its contents
    // "injecting" itself into the props of last (injected too) paragraph.
    if (realContents.length > 0) {
      let patchContents = realContents.map((c) => { return c.toJson() })
      let injectedP = new Paragraph()
      injectedP.addFormat().contents.push(
        new Element(
          this.src,
          this.contentHook,
          [
            this.cols,
            this.pgMar,
            this.pgSz,
            this.type
          ]
        )
      )
      patchContents.push(injectedP.toJson())
      return JSON.parse(JSON.stringify(patchContents))
    }
    // Otherwise render as a normal element.
    return super.toJson()
  }

  addParagraph () {
    let p = new Paragraph()
    this.contents.push(p)
    return p
  }

  addTable () {
    let t = new Table()
    this.contents.push(t)
    return t
  }

  addCols () {
    let cols = new SectionCols()
    this.setCols(cols)
    return cols
  }

  setCols (value) {
    if (!(value instanceof SectionCols || value === null)) {
      throw TypeError('Invalid Section.cols')
    }
    this.cols = value
  }

  getCols () {
    return this.cols
  }

  addPageMargins () {
    let pgMar = new PageMargins()
    this.setPageMargins(pgMar)
    return pgMar
  }

  setPageMargins (value) {
    if (!(value instanceof PageMargins || value === null)) {
      throw TypeError('Invalid Section.pgMar')
    }
    this.pgMar = value
  }

  getPageMargins () {
    return this.pgMar
  }

  addPageSize () {
    let pgSz = new PageSize()
    this.setPageSize(pgSz)
    return pgSz
  }

  setPageSize (value) {
    if (!(value instanceof PageSize || value === null)) {
      throw TypeError('Invalid Section.pgSz')
    }
    this.pgSz = value
  }

  getPageSize () {
    return this.pgSz
  }

  addType () {
    let t = new SectionType()
    this.setType(t)
    return t
  }

  setType (value) {
    if (!(value instanceof SectionType || value === null)) {
      throw TypeError('Invalid Section.type')
    }
    this.type = value
  }

  getType () {
    return this.type
  }
}
