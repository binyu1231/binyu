export default [
  {
    name: 'Language',
    children: [
      {
        name: 'JavaScript',
        children: [
          {
            name: 'Syntax',
            children: [
              { name: '正则表达式', value: '/language/javascript/regexp' },
              { name: 'Promise', value: '/language/javascript/promise' },
              { name: '模块与解构', value: '/language/javascript/module' },
              { name: '类', value: '/language/javascript/class' },
              { name: 'DOM操作', value: '/language/javascript/dom' },
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: '技巧', value: '/language/javascript/awesome' },
              { name: 'dreamjs', value: '/language/javascript/dreamjs' },
              { name: 'lodash', value: '/language/javascript/lodash' },
              { name: 'TypeScript 类型挑战 Easy', value: '/language/typescript/type-challenges-easy' },
              { name: 'TypeScript 类型挑战 Medium', value: '/language/typescript/type-challenges-medium' },
            ],
          },
          {
            name: '你不知道的 JavaScript',
            children: [
              { name: '作用域与闭包', value: '/language/javascript/you-dont-know-javascript-01' },
              { name: 'this', value: '/language/javascript/you-dont-know-javascript-02' },
              { name: '对象原型', value: '/language/javascript/you-dont-know-javascript-03' },
              { name: '类型', value: '/language/javascript/you-dont-know-javascript-04' },
              { name: '语法', value: '/language/javascript/you-dont-know-javascript-05' },
              { name: '异步', value: '/language/javascript/you-dont-know-javascript-06' },
              { name: '性能', value: '/language/javascript/you-dont-know-javascript-07' },
              { name: '现在与未来', value: '/language/javascript/you-dont-know-javascript-08' },
            ],
          },
          {
            name: 'Link',
            children: [
              { name: '现代JavaScript教程', value: 'https://zh.javascript.info/' },
            ],
          },
        ],
      },
      {
        name: 'CSS',
        children: [
          {
            name: 'Syntax',
            children: [
              { name: 'Background', value: '/language/css/css-background' },
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: 'Tips', value: '/language/css/css-helper-tip' },
              { name: 'Reset', value: '/language/css/css-helper-reset' },
            ],
          },
        ],
      },
      {
        name: 'Python',
        children: [
          {
            name: 'Syntax',
            children: [
              { name: 'Syntax', value: '/language/python/py-syntax' },
              { name: 'OO', value: '/language/python/py-oo' },
              { name: 'API module', value: '/language/python/py-api-module' },
              { name: 'data model', value: '/language/python/py-data-model' },
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: 'Pip', value: '/language/python/py-project-pip' },
              { name: 'Flask', value: '/language/python/py-project-flask' },
              { name: 'Numpy', value: '/language/python/py-lib-numpy' },
              { name: 'Matplotlib', value: '/language/python/py-lib-matplotlib' },
              { name: 'Pillow', value: '/language/python/py-lib-pillow' },
            ],
          },

          {
            name: 'Link',
            children: [
              { name: 'Github:python-flask-boilerplate', value: 'https://github.com/114000/python-flask-boilerplate' },
            ],
          },
        ],
      },
      {
        name: 'C++',
        children: [
          {
            name: 'Syntax',
            children: [
              { name: 'Syntax', value: '/language/cpp' },
            ],
          },
        ],
      },
      {
        name: 'C#',
        children: [
          {
            name: 'Syntax',
            children: [
              { name: 'Syntax', value: '/language/csharp/csharp-nutshell' },
              { name: 'LINQ', value: '/language/csharp/csharp-linq' },
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: 'Tips', value: '/language/csharp/csharp-tips' },
              { name: 'LitJson', value: '/language/csharp/litjson' },
            ],
          },
        ],
      },
      {
        name: 'SQL',
        children: [
          {
            name: 'Syntax',
            children: [
              { name: '查询', value: '/language/sql/read' },
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: 'Sqlite', value: '/language/sql/sqlite' },
              { name: 'GraphQL', value: '/language/sql/graphQL' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Framework',
    children: [
      {
        name: 'Vue',
        children: [
          {
            name: 'Features',
            children: [
              { name: 'Vue 3.2', value: '/framework/vue/vue-3-2-feature' },
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: 'how to setup', value: '/framework/vue/how-to-setup' },
              { name: 'Taro Startup', value: '/framework/vue/taro-startup' },
              { name: 'Scope', value: '/framework/vue/scope' },
            ],
          },
        ],
      },
      {
        name: 'Docker',
        children: [
          {
            name: 'Basic',
            children: [
              { name: '镜像与容器', value: '/framework/docker/command' },
              { name: 'Docker Compose', value: '/framework/docker/compose' },
            ],
          },
        ],
      },
      {
        name: 'Git',
        children: [
          {
            name: 'Basic',
            children: [
            ],
          },
          {
            name: 'Practice',
            children: [
              { name: 'Git Commit Message', value: '/framework/git/commit-message' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'thought',
    children: [
      {
        name: 'Design Pattern',
        children: [
          {
            name: 'Design Pattern',
            children: [
              { name: 'Design Pattern', value: '/thought/design-pattern' },
            ],
          },
        ],
      },
    ],
  },
]
