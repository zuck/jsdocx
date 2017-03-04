export default {
  generate: function (type) {
    if (typeof type === undefined) type = "blob"
    return this.zip.generateAsync({ type: type })
  }
}
