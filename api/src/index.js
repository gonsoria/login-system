const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.POR || 3001;


app.use(express.json());

app.use('/', routes)



const server = app.listen(PORT, () => {
    console.log(`Server listening at port: http://localhost:${PORT}`)
})