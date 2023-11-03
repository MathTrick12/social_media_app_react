const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const dbFilePath = path.join(__dirname, 'data', 'db.json') // Replace with the correct absolute path
const router = jsonServer.router(dbFilePath)
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3500

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running', port)
})
