import cors from 'cors'
import express from 'express'
import { PORT } from './config.js'

// Init app
const app = express()
// Middleware for parsing request body
app.use(express.json())
// Middleware for handling CORS policy
app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type'],
	})
)
// http request
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/', (req, res) => {
	res.send('Got a POST request')
})

app.put('/user', (req, res) => {
	res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
	res.send('Got a DELETE request at /user')
})
// connect to model routes
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
// connect to db
