let mdJson = require('md-json')
let fs = require('fs')

fs.readFile('./test.md', (err, data) => {
  if (err) {
    console.log(err)
  }
  let res = mdJson(data.toString())
  res.then(data => {
    console.log(data)
  })
})
