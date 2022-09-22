const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'SequelizeValidationError') {
    return response.status(400).send({ error: error.message })
  } else {
    return response.status(500).send({ error: `Something happened! Error: ${error.message}`})
  }
}

module.exports = {
  errorHandler
}