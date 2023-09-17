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

      if (source !== 'TWD' && source !== 'JPY' && source !== 'USD') {
        return res.status(400).json({
          status: 'error',
          message: 'Please enter normal currency'
        })
      }

      if (target !== 'TWD' && target !== 'JPY' && target !== 'USD') {
        return res.status(400).json({
          status: 'error',
          message: 'Please enter normal currency'
        })
      }

      if (rates[source] && rates[source][target]) {
        let amountChange = amount.split(',').join("")
        amountChange = amountChange.split('$').join("")
        amount = Math.round(amountChange * rates[source][target] * 100) / 100
      }
      res.status(200).json({ msg: 'success', amount: `$${amount}` })
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