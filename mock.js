const faker = require('faker')
faker.locale = 'zh_CN'

let users = []

for (let i = 0; i < 10; i++) {
  users.push({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    creataAt: faker.date.past(),
    updateAt: faker.date.past(),
    avatar: faker.image.avatar(),
    password: faker.internet.password()
  })
}

let posts = []

for (let i = 0; i < 10; i++) {
  posts.push({
    id: faker.random.uuid(),
    title: faker.name.title(),
    content: faker.lorem.text(),
    creataAt: faker.date.past(),
    updateAt: faker.date.past(),
    image: faker.image.cats()
  })
}

const userinfo = {
  niceName: 'mars',
  password: 'mars',
  avatar: faker.image.avatar(),
  bio: faker.lorem.text(),
  menu: [
    {
      title: '控制面板',
      path: '/',
      icon: 'appstore-o',
      disable: false
    },
    {
      title: '内容管理',
      path: '/content',
      icon: 'bars',
      disable: false,
      childrens: [
        {
          title: '文章管理',
          path: '/content/article',
          icon: 'bars',
          disable: false
        },
        {
          title: '专题管理',
          path: '/content/event',
          icon: 'bars',
          disable: false
        },
        {
          title: '标签管理',
          path: '/content/tag',
          icon: 'bars',
          disable: false
        }
      ]
    },
    {
      title: '用户管理',
      path: '/user',
      icon: 'user',
      disable: false,
      childrens: [

      ]
    },
    {
      title: '系统管理',
      path: '/system',
      icon: 'setting',
      disable: false,
      childrens: [
        {
          title: '系统设置',
          path: '/system/setting',
          icon: 'bars',
          disable: false
        }
      ]
    }
  ]
}

module.exports = {
  users,
  posts,
  userinfo
}
