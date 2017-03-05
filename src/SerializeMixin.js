import { toXML as convertToXml } from 'to-xml'

export default class {
  constructor(tree) {
    this.src = tree || {}
  }

  toJson () {
    return JSON.parse(JSON.stringify(this.src))
  }

  toXml () {
    return convertToXml(this.toJson())
  }
}
