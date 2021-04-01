const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in out of time ${process.env.NODE_ENV} on port ${PORT}`));