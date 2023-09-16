const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.query) // 找取前端資料
  let amount = 0
  res.render('index', { amount })
})

module.exports = router