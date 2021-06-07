const fs = require('fs')
const path = require('path')
const Markdown = require('markdown-it')
const meta = require('markdown-it-meta')

function toDouble(n) {
  return n < 10 ? `0${n}` : `${n}`
}

function metaInfos(dirPath) {
  const files = fs.readdirSync(dirPath, 'utf-8')

  const infos = files
    .filter(file => file.endsWith('.md'))
    .map((file) => {
      const mdtext = fs.readFileSync(`${dirPath}/${file}`, 'utf-8')
      const md = Markdown()
      md.use(meta)
      md.render(mdtext)
      const filename = file.replace('.md', '')
      return {
        title: filename,
        ...md.meta,
        file: filename,
      }
    })

  infos.sort((a, b) => new Date(b.date) - new Date(a.date))

  return infos
}

const blogs = metaInfos(path.resolve(__dirname, '../public/blog'))

const tech = [
  'language-javascript',
  'language-python',

].reduce((acc, dir) => {
  acc[dir] = metaInfos(path.resolve(__dirname, `../public/tech/${dir}`))

  return acc
}, {})

const config = {
  blogs,
  tech,
}

fs.writeFileSync(path.resolve(__dirname, '../public/meta/config.json'), JSON.stringify(config, null, 2), 'utf-8')
