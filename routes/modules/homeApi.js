const express = require('express')
const router = express.Router()
const data = require('../../models/data')

router.get('/api',  async(req, res) => {
  try {
    const coinData = data.currencies
    const source = req.query.source
    const target = req.query.target
    let amount = req.query.amount
    const rates = {
      TWD: coinData.TWD,
      JPY: coinData.JPY,
      USD: coinData.USD,
    }
    if (rates[source] && rates[source][target]) {
      let amountChange = amount.split(',').join("")
      amountChange = amountChange.split('$').join("")
      amount = Math.round(amountChange * rates[source][target] * 100) / 100
    }
    res.status(200).json({ msg: 'success', amount: `${amount}`})
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Server Error!'})
  }
})

module.exports = router