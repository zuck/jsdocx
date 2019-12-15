![jsdocx](https://cdn.rawgit.com/zuck/jsdocx/b70fc554/jsdocx.svg)

# jsdocx

> Generate .docx files from JS

## Demo

https://zuck.github.io/jsdocx-demo/

## Install

**Node**
```bash
$ npm install jsdocx
```

**Browser**
```bash
<script src="https://unpkg.com/jsdocx"></script>
```

## Build

```bash
$ git clone https://github.com/zuck/jsdocx.git
$ cd jsdocx
$ npm install
$ npm run build
```

## Test

```bash
$ npm test
```

## How to use

```js
import * as jsdocx from 'jsdocx'

// ES5: var jsdocx = require('jsdocx')

let doc = new jsdocx.Document()
let p = doc.addParagraph()
p.addRun().addText('Hello World!')
p.addFormat().addHAlignment().setVal('center')
doc.generate().then((content) => {
  // e.g. saveAs(content, 'hello.docx')
})
```

## Reference

- http://officeopenxml.com/anatomyofOOXML.php
- https://gist.github.com/felipeochoa/81d8fa27901e8222c6ffbeb165a85acc

## License

The MIT License (MIT)

[Read more...](./LICENSE)

Copyright (c) 2017 Emanuele Bertoldi
