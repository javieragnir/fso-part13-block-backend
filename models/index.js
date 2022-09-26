const Blog = require('./blog')
const User = require('./user')
const UserReadingLists = require('./user_reading_lists')

User.hasMany(Blog)
Blog.belongsTo(User)

User.belongsToMany(Blog, { through: UserReadingLists, as: 'readings' })
Blog.belongsToMany(User, { through: UserReadingLists, as: 'users_reading' })

module.exports = {
  Blog, User, UserReadingLists
}