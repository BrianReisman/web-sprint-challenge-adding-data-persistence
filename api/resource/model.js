const db = require('../../data/dbConfig')

const getResources = () => {
  return db('resources')
}

const addResource = (newResource) => {
  return db('resources').insert(newResource)
}

module.exports = {
  getResources,
  addResource
}