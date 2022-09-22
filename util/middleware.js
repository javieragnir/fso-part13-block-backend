//todo: throw more specific error for updating likes?
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'SequelizeValidationError') {
    return response.status(400).send({ error: error.message })
  } else {
    return response.status(400).send({ error })
  }
}

module.exports = {
  errorHandler
}