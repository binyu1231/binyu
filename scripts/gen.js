const fs = require('fs')
const path = require('path')
const Markdown = require('markdown-it')
const meta = require('markdown-it-meta')

function toDouble(n) {
  return n < 10 ? `0${n}` : `${n}`
}

function metaInfos(dirPath) {
  let files = []

  try {
    files = fs.readdirSync(dirPath, 'utf-8')
  }
  catch {}

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

function genPostJSON() {
  const posts = metaInfos(path.resolve(__dirname, '../src/pages/blog'))
  fs.writeFileSync(path.resolve(__dirname, '../src/meta/posts.json'), JSON.stringify(posts, null, 2), 'utf-8')
  globalThis.console.log(posts)
}

function genShortcutJSON() {
  const shortcutDirs = ['framework', 'language', 'thought']
  const shortcutJSON = shortcutDirs.map((dir) => {
    const dirPath = path.resolve(__dirname, '../src/pages/', dir)
    const subdirs = fs.readdirSync(dirPath, 'utf-8')

    const lv2List = subdirs
      .map((sdir) => {
        return metaInfos(`${dirPath}/${sdir}`, 'utf-8')
          .filter(pageInfo => pageInfo.index)
          .map((p) => {
            p.path = `${p.index.replace(/\.\w+$/, '')}.${p.file}`.toLocaleLowerCase().replace(/\./g, '/')
            p.levels = p.index.split('.')
            p.parent = sdir
            return p
          })
      })
      .filter(lv2Infos => lv2Infos.length)
      .map((lv2Infos) => {
        const lv3List = lv2Infos.reduce((lv3, page) => {
          let lv3Item = lv3.find(lv3Item => lv3Item.name === page.levels[2])
          if (!lv3Item) {
            lv3Item = {
              name: page.levels[2],
              children: [],
            }
            lv3.push(lv3Item)
          }

          lv3Item.children.push({
            name: page.title, value: page.path,
          })

          return lv3
        }, [])
        return {
          name: lv2Infos[0].levels[1],
          children: lv3List,
        }
      })
    return {
      name: dir[0].toUpperCase() + dir.substring(1),
      children: lv2List,
    }
  })

  fs.writeFileSync(path.resolve(__dirname, '../src/meta/shortcut.json'), JSON.stringify(shortcutJSON, null, 2), 'utf-8')
  globalThis.console.log(JSON.stringify(shortcutJSON, null, 2))
}

genShortcutJSON()
genPostJSON()
