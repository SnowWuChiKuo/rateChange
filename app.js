const express = require('express')
const handlebars = require('express-handlebars')
const routes = require('./routes')

const app = express()
// 建立 port 號碼
const port = 3000

//使用 樣板引擎(第一個參數是樣板引擎的名稱，第二個參數是放入此樣板引擎的相關設定)
app.engine('hbs', handlebars({ defaultLayout: 'main', extname: 'hbs' }))
//透過app.set告訴Express說要設定的 view engine 是 handlebars
app.set('view engine', 'hbs') //若engine是handlebars是縮寫，此處的handlebars也是要縮寫


app.use(routes)

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})