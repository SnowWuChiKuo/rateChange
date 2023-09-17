const chai = require('chai')
const expect = chai.expect
const homeControllers = require('../controllers/apis/home-controllers')


describe('# home requests', () => {
  describe('getHome', () => {
    it('test input value', () => {
      const req = {
        query: {
          source: 'TWD',
          target: 'JPY',
          amount: '$1525'
        }
      }

      const res = {
        status: (statusCode) => ({
          json: (data) => {
            expect(statusCode).to.equal(200)  // 狀態碼是否是 200
            expect(data.msg).to.equal('success') // json檔的msg是不是 success
            expect(data.amount).to.equal('$5595.23') // json檔的amount是不是 $5595.23
          }
        })
      }

      homeControllers.getHome(req, res)
    })

    it('test error value', () => {
      const req = {
        query: {
          source: 'AUD', // 錯誤資訊
          target: 'USD',
          amount: '1525'
        }
      }

      const res = {
        status: (statusCode) => ({
          json: (data) => {
            expect(statusCode).to.equal(400) // 錯誤的狀態碼是否是 400
            expect(data.status).to.equal('error') // json檔的 status 是不是 error
            expect(data.msg).to.equal('Please enter normal currency') // json檔的 msg 是不是 Please enter normal currency
          }
        })
      }

      homeControllers.getHome(req, res)
    })

  }) 
})