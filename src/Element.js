import { toXML as convertToXml } from 'to-xml'

export default class {
  constructor (src, contenthook) {
    this.src = src || {}
    this.contents = []
    this.contentHook = contenthook || null
    if (
      this.contentHook &&
      (['.', '['].indexOf(this.contentHook[0]) === -1)
    ) {
      throw TypeError('First char of content hook should be "." or "["')
    }
  }

  finalize (contents) {
    // Do nothing.
  }

  toJson () {
    let src = Object.assign({}, this.src)
    let contents = this.contents.slice(0)

    this.finalize(contents)

    let realContents = contents.filter((c) => {
      return (c && ((c instanceof String) || (typeof c === 'object')))
    })

    if (this.contentHook && realContents.length > 0) {
      let cntHookPath = this.contentHook
      if (cntHookPath.endsWith('["#"]')) {
        cntHookPath = cntHookPath.splice(0, cntHookPath.length - 5)
      }
      let hook = eval('src' + cntHookPath)
      if (typeof hook === 'object') {
        if (Object.keys(hook).indexOf('#') === -1) {
          hook['#'] = []
        }
        let hookCnt = hook['#']
        if (!(hookCnt instanceof Array)) {
          hook['#'] = [hookCnt].filter((i) => { return i !== null })
        }
        realContents.forEach((c) => {
          if (c && c.toJson) {
            let json = c.toJson()
            hook['#'].push(json)
          }
        })
      }
    }

    return JSON.parse(JSON.stringify(src))
  }

  toXml () {
    return convertToXml(this.toJson())
  }
}
