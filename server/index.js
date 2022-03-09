const express = require("express")
const app = express()
const getRoutes = require("./routes/articles")
const cors = require('cors')

PORT = 4000

app.use(cors())

app.use(express.json());

getRoutes(app)

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`Server started open: http://localhost:${PORT}`)
});

module.exports = app;
