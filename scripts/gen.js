const fs = require('fs')
const path = require('path')
const Markdown = require('markdown-it')
const meta = require('markdown-it-meta')

function metaInfos(dirPath) {
  const files = fs.readdirSync(dirPath, 'utf-8')

  const infos = files.map((file) => {
    const mdtext = fs.readFileSync(`${dirPath}/${file}`, 'utf-8')
    const md = Markdown()
    md.use(meta)
    md.render(mdtext)
    return {
      ...md.meta,
      file: `${file.replace('.md', '')}`,
    }
  })

  infos.sort((a, b) => b.date - a.date)

  return infos
}

const blogs = metaInfos(path.resolve(__dirname, '../public/blog'))

const config = {
  blogs,
}

fs.writeFileSync(path.resolve(__dirname, '../public/meta/config.json'), JSON.stringify(config), 'utf-8')
