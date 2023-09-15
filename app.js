const express = require('express')
const app = express()

// 建立 port 號碼
const port = 3000

// 使用 Express 傳送回應給使用者
app.get('/', (req, res) => {
  res.send(`This is my first Express Web App`)
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})