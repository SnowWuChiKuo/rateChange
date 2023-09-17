const data = require('../../models/data')

const homeControllers = {
  getHome: (req, res) => {
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
      res.render('index', { amount, source, target })
    } catch (err) {
      if (!err) {
        return res.status(500).json({ error: 'Server Error!' })
      } else {
        console.log(err)
      }
    }
  }
}

module.exports = homeControllers
