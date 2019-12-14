'use strict'

const $jsdocx = jsdocx.default

const app = new Vue({
  el: '#app',
  data () {
    return {
      version: $jsdocx.version,

      simpleText: 'Write something here...',

      paragraphFormattedText: 'Write something here and choose a paragraph alignment...',
      hAlignment: 'left',

      runFormattedText: 'Write something here and set bold and italic properties...',
      bold: false,
      italic: false,

      columnText: 'Write something here and choose column number.\n\nYou should write a long text in order to better see column behavior, something like...\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nisl magna. In id turpis pulvinar, varius mauris nec, dignissim enim. Ut sit amet pharetra velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin quis tortor porttitor, vulputate odio rhoncus, sodales libero. In ut rhoncus ante, ut pellentesque ipsum. Aliquam erat volutpat. Fusce et pharetra magna, vitae lacinia nibh. Nullam molestie tellus non dui convallis, auctor dapibus ex egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus dignissim placerat aliquet. Morbi et nulla urna. Nam lectus tortor, luctus eu mauris id, gravida tristique mi. Ut eu congue nisi. Curabitur tellus est, placerat at egestas sit amet, scelerisque a libero. Proin bibendum consequat aliquet.\n\nNulla facilisi. Nullam posuere enim sed tincidunt posuere. Curabitur nec condimentum ante. Pellentesque lacinia efficitur enim, quis varius justo gravida et. Aliquam eu auctor eros. Nullam ac feugiat nibh, in pretium nisi. Cras vitae congue tortor. Aliquam egestas sapien ut mauris imperdiet fringilla. Duis pretium mollis lorem at pellentesque. Morbi mattis turpis ac lacus ornare dictum. Praesent pretium vulputate libero, quis porttitor felis malesuada at. Nulla placerat dolor dui, eget molestie ex elementum porttitor. Pellentesque nec massa orci. Phasellus luctus semper leo, in sollicitudin metus pellentesque id. Cras consectetur viverra risus sed suscipit.\n\nMaecenas sodales vulputate sollicitudin. Sed tincidunt augue sit amet imperdiet iaculis. Nam ornare ligula at volutpat lacinia. Donec vehicula justo enim, vel lacinia libero pharetra at. Nulla suscipit urna lectus, sed sollicitudin nisi aliquam eget. Donec ut tortor in elit dapibus tempor a ac lacus. In luctus a ante at vulputate. Proin placerat lacus ex, sit amet pulvinar lacus rutrum ac. Vivamus rutrum dolor at diam luctus commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris metus dui, ornare a finibus at, efficitur a dui. Suspendisse massa nunc, dignissim nec tellus id, vestibulum posuere nisi. Curabitur ac blandit nulla.\n\nMauris non hendrerit augue. Quisque nibh ipsum, venenatis a pretium eget, elementum at nibh. Integer lacinia in eros sed condimentum. Phasellus in scelerisque libero. Donec pellentesque lacinia tellus ut bibendum. Integer hendrerit libero quis consectetur lobortis. Mauris tristique purus sit amet augue tincidunt consequat. Phasellus vel egestas erat. Nulla a ipsum ut ipsum pretium sollicitudin. Nunc aliquet in sem eget fringilla. Duis consequat in nulla quis imperdiet. Nam quis nisl ultrices, ultricies est tempor, tincidunt neque.\n\nPellentesque at massa turpis. Curabitur est nisl, condimentum quis fringilla ut, efficitur vel erat. Etiam at nisl metus. Nam semper condimentum mauris at facilisis. Donec tristique, ante eu eleifend sollicitudin, enim lorem fermentum ante, et rutrum sem ligula eu odio. Curabitur eu laoreet tortor. Proin egestas turpis turpis, nec placerat sem condimentum et.',
      numColumns: 2,

      numTableRows: 2,
      numTableCols: 2,
      showTableBorders: true
    }
  },
  methods: {
    generateEmptyDocx() {
      var doc = new $jsdocx.Document()
      var p = doc.addParagraph()
      p.addRun().addText('Hello World!')
      doc.generate().then(function(content) {
        saveAs(content, 'empty.docx')
      })
    },
    generateHelloDocx() {
      var doc = new $jsdocx.Document()
      var p = doc.addParagraph()
      p.addRun().addText('Hello World!')
      doc.generate().then(function(content) {
        saveAs(content, 'hello.docx')
      })
    },
    generateSimpleDocx() {
      var doc = new $jsdocx.Document()
      this.simpleText.split('\n').forEach((line) => {
        doc.addParagraph().addRun().addText(line)
      })
      doc.generate().then(function(content) {
        saveAs(content, 'custom.docx')
      })
    },
    generateDocxWithFormattedParagraph() {
      var doc = new $jsdocx.Document()
      this.paragraphFormattedText.split('\n').forEach((line) => {
        var p = doc.addParagraph()
        p.addRun().addText(line)
        p.addFormat().addHAlignment().setVal(this.hAlignment || null)
      })
      doc.generate().then(function(content) {
        saveAs(content, 'paragraph_format.docx')
      })
    },
    generateDocxWithFormattedText() {
      var doc = new $jsdocx.Document()
      this.runFormattedText.split('\n').forEach((line) => {
        var r = doc.addParagraph().addRun()
        r.addText(line)
        var f = r.addFormat()
        f.setBold(this.bold || null)
        f.setItalic(this.italic || null)
      })
      doc.generate().then(function(content) {
        saveAs(content, 'text_format.docx')
      })
    },
    generateDocxWithColumns() {
      var doc = new $jsdocx.Document()
      doc.addCols().setNum(this.numColumns)
      this.columnText.split('\n').forEach((line) => {
        doc.addParagraph().addRun().addText(line)
      })
      doc.generate().then(function(content) {
        saveAs(content, 'columns.docx')
      })
    },
    generateDocxWithTable() {
      var doc = new $jsdocx.Document()
      var t = doc.addTable()
      var b = t.addFormat().addBorders()
      if (this.showTableBorders) {
        b.setAll(1)
      }
      var r, c
      for (r = 0; r < this.numTableRows; r++) {
        var row = t.addRow()
        for (c = 0; c < this.numTableCols; c++) {
          row.addCell().addParagraph().addRun().addText(`row${r+1} - col${c+1}`)
        }
      }
      doc.generate().then(function(content) {
        saveAs(content, 'table.docx')
      })
    }
  }
})