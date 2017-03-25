import Element from './Element'
import SectionCols from './SectionCols'
import PageMargins from './PageMargins'
import PageSize from './PageSize'
import Paragraph from './Paragraph'

export default class extends Element {
  constructor (
    cols,
    pgMar,
    pgSz
  ) {
    super({ 'w:sectPr': {} }, '["w:sectPr"]')
    this.setCols(cols || null)
    this.setPageMargins(pgMar || null)
    this.setPageSize(pgSz || null)
  }

  finalize (contents) {
    if (this.cols) contents.push(this.cols)
    if (this.pgMar) contents.push(this.pgMar)
    if (this.pgSz) contents.push(this.pgSz)
  }

  toJson () {
    let section = this
    let count = this.contents.filter((c) => { return c !== null }).length
    if (count) {
      // If a section contains any paragraph, it renders its contents
      // "injecting" itself into the props of its last paragraph.
      let patchContents = this.contents.map((p, i) => {
        if (i + 1 === count) {
          let patchS = new Element(
            section.src,
            section.contentHook,
            [ section.cols, section.pgMar, section.pgSz ]
          )
          let patchP = new Paragraph()
          patchP.contents = p.contents.slice(0)
          patchP.format = p.format || patchP.addFormat()
          patchP.format.contents.push(patchS)
          return patchP.toJson()
        }
        return p.toJson()
      })
      return JSON.parse(JSON.stringify(patchContents))
    }
    return super.toJson()
  }

  addParagraph () {
    let p = new Paragraph()
    this.contents.push(p)
    return p
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
}
