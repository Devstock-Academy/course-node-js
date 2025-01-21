import { createServer } from 'http'
import { users } from './mockData.js'

const PORT = process.env.PORT || 5000

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

const setJsonHeader = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    setJsonHeader(req, res, () => {
      const requestUrl = req.url
      const requestMethod = req.method

      if (requestMethod === 'GET') {
        if (requestUrl === '/api/users') {
          res.statusCode = 200
          res.end(JSON.stringify(users))
        } else if (requestUrl.match(/\/api\/users\/([0-9]+)/)) {
          const id = parseInt(requestUrl.split('/')[3])
          const user = users.find((user) => user.id === id)
          if (user) {
            res.statusCode = 200
            res.end(JSON.stringify(user))
          } else {
            res.statusCode = 404
            res.end(JSON.stringify({ message: 'User not found' }))
          }
        } else {
          res.statusCode = 404
          res.end(JSON.stringify({ message: 'Route not found' }))
        }
      }
    })
  })
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
