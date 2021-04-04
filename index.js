// start your server here
const server = require('./api/server');

const port = 5005;

server.listen(port, ()=>{
  console.log(`\n ** Server listening on port ${port} ** \n`)
})