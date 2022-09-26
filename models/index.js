const Blog = require('./blog')
const User = require('./user')
const UserReadings = require('./user_readings')

User.hasMany(Blog)
Blog.belongsTo(User)

User.belongsToMany(Blog, { through: UserReadings, as: 'users_reading' })
Blog.belongsToMany(User, { through: UserReadings, as: 'reading_list_blogs'})

module.exports = {
  Blog, User, UserReadings
}