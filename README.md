# jsdocx

> Generate .docx files from JS

## Demo

https://zuck.github.io/jsdocx-demo/

## Install

```bash
$ npm install jsdocx
```

## Build

```bash
$ git clone https://github.com/zuck/jsdocx.git
$ cd jsdocx
$ npm install
$ npm run build
```

## How to use

```js
import jsdocx from 'jsdocx'

let doc = new jsdocx.Document()
let p = doc.addParagraph()
p.addRun().addText('Hello World!')
p.addFormat().addHAlignment().setVal('center')
doc.generate().then((content) => {
  // e.g. saveAs(content, 'hello.docx')
})
```

## License

The MIT License (MIT)

[Read more...](./LICENSE)

Copyright (c) 2017 Emanuele Bertoldi
