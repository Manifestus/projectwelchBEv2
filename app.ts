require('dotenv').config()

import express from 'express'
import db from './models'

const app = express()
const port = process.env.DATABASE_PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`app is listening on port ${port}`)
    })
})