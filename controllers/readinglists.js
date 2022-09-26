const router = require('express').Router()
const { UserReadingLists } = require('../models')
const { tokenExtractor } = require('../util/middleware')

const readingListFinder = async (req, res, next) => {
  req.readingList = await UserReadingLists.findByPk(req.params.id)
  next()
}

router.post('/', async (req, res) => {
  const readingList = await UserReadingLists.create(req.body)
  res.json(readingList)
})

router.put('/:id', readingListFinder, tokenExtractor, async (req, res) => {
  if (!req.readingList) {
    res.status(404).end()
  }

  if (req.readingList && req.readingList.userId === req.readingList.id) {
    req.readingList.read = req.body.read
    await req.readingList.save()
    res.json(req.readingList)
  } else {
    res.status(400).send({ error: 'user id does not match id of user who posted blog'})
  }

})

module.exports = router