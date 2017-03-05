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

  toJson () {
    let src = Object.assign({}, this.src)
    let hook = this.contentHook ? eval('src' + this.contentHook) : src
    let hookIsArray = hook instanceof Array
    this.contents.forEach((content) => {
      if (hookIsArray) {
        hook.push(content.toJson())
      }
      else {
        Object.assign(hook, content.toJson())
      }
    })
    return JSON.parse(JSON.stringify(src))
  }

  toXml () {
    return convertToXml(this.toJson())
  }
}
