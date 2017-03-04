import JSZip from 'jszip'

export default class {
  constructor() {
    this.zip = new JSZip()
  }

  generate (type) {
    if (typeof type === undefined) type = "blob"
    return this.zip.generateAsync({ type: type })
  }
}
