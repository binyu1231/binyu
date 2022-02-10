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

      const d = new Date(md.meta.date)
      const dateString = md.meta.date ? `${d.getFullYear()}-${toDouble(d.getMonth() + 1)}-${toDouble(d.getDate())}` : ''

      return {
        title: filename,
        ...md.meta,
        file: filename,
        date: dateString,
      }
    })

  infos.sort((a, b) => new Date(b.date) - new Date(a.date))

  return infos
}

const posts = metaInfos(path.resolve(__dirname, '../src/pages/blog'))

fs.writeFileSync(path.resolve(__dirname, '../src/meta/posts.json'), JSON.stringify(posts, null, 2), 'utf-8')


console.log(posts)