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
    super({ 'w:sectPr': {} })
    this.setCols(cols || null)
    this.setPageMargins(pgMar || null)
    this.setPageSize(pgSz || null)
  }

  toJson () {
    // Instead of default element rendering, sections render their contents
    // and "inject" themselves into the props of their last paragraph.
    let section = this
    let count = this.contents.length
    let patchContents = this.contents.map((p, i) => {
      if (i + 1 === count) {
        let patchS = new Element(
          section.src,
          '["w:sectPr"]', [
            section.cols, section.pgMar, section.pgSz
          ]
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
