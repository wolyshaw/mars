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

module.exports = {
  users,
  posts
}
