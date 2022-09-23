const router = require('express').Router()
const { Blog, User } = require('../models')
const { tokenExtractor } = require('../util/middleware')

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id)
  next()
}

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll()

  res.json(blogs)
})

router.post('/', tokenExtractor, async (req,res) => {
  const user = await User.findByPk(req.decodedToken.id)
  const blog = await Blog.create({ ...req.body, userId: user.id })
  res.json(blog)
  // has error handler from tokenExtractor
})

router.put('/:id', blogFinder, async(req, res) => {
  if (req.blog) {
    req.blog.likes = req.blog.likes + 1
    await req.blog.save()
    res.json(req.blog)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', blogFinder, tokenExtractor, async (req, res) => {
  if (!req.blog) {
    res.status(204).end()
  }

  if (req.blog && req.blog.userId === req.decodedToken.id) {
    console.log('req.blog', req.blog)
    console.log('req.decodedToken', req.decodedToken)
    await req.blog.destroy()
    res.status(204).end()
  } else {
    res.status(400).send({ error: 'user id does not match id of user who posted blog'})
  }
})

module.exports = router