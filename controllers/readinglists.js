const router = require('express').Router()
const { UserReadingLists } = require('../models')

router.post('/', async (req, res) => {
  const readingList = await UserReadingLists.create(req.body)
  res.json(readingList)
})

module.exports = router