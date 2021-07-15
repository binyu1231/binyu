const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()

const whitelist = [
  'https://binyu.me', 
]

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


function getFilePath (name) {
  return path.resolve(__dirname, './db/' + name + '.csv')
}

function readFile (name) {
  const filename = getFilePath(name)
  try {
    if (fs.existsSync(filename)) {
      return fs.readFileSync(filename, { encoding: 'utf-8' })
    }
    else {
      throw new ReferenceError('no file')
    }
  }
  catch {
    return null
  }
}

function writeFile (name, content) {
  let fileContent = readFile(name) || ''

  fileContent += `${content}\n`

  fs.writeFileSync(getFilePath(name), fileContent)
}

function contentFormat (content) {
  content = content || ''
  return content.split('\n')
    .filter(row => row !== '')
    .map(row => row.split(','))
    .map(([date, name, mail, comment, ref, link]) => ({ date, name, mail, comment, ref: Number(ref), link }))
}

function dbl (n) {
  return Number(n) > 9 ? n : '0' + n
}

app.get('/comment/:post', (req, res) => {
  const fileContent = readFile(req.params.post)

  res.send(contentFormat(fileContent))
})

app.post('/comment/:post', (req, res) => {
  const { name, mail, comment, ref } = req.body
  const d = new Date()
  const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${dbl(d.getHours())}:${dbl(d.getMinutes())}:${dbl(d.getSeconds())}`
  const content = `${date},${name},${mail},${comment.replace(',', '，')},${ref || 0}`

  writeFile(req.params.post, content)
  
  const fileContent = readFile(req.params.post)
  res.send(contentFormat(fileContent))
})

app.listen(4321)