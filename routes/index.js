const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const homeApi = require('./modules/homeApi')

router.get('/api', homeApi)

router.use('/api', homeApi)
router.use('/', home)

module.exports = router