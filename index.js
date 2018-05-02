const express = require('express')
const expressGraphQL = require('express-graphql')
import schema from './schema'
const cors = require('cors')

// Create an express instance
const app = express()

// Connect with graphql and the graphiql panel
app.use('/afi-subscribers',cors(), expressGraphQL({
  schema,
  graphiql: true
}))

// Start server
app.listen(4000, () => {
  console.log('Server is running...')
})
