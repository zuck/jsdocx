import SerializeMixin from './SerializeMixin'

export default class extends SerializeMixin {
  constructor (src, contenthook) {
    super(src)
    this.contentHook = contenthook || null
    if (this.contentHook && ['.', '['].indexOf(this.contentHook[0]) == -1) {
      console.error('First char of content hook should be a dot or open curly bracket')
    }
    this.contents = []
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
}
