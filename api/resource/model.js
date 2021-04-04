// build your `Resource` model here
const db = require('../../data/dbConfig')
// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

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