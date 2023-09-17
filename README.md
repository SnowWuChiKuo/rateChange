## 介紹
這是一個可以轉換幣值的程式，但匯率的部分需要手動進行修改!

## 產品功能
1. 使用者可以選擇什麼幣值要轉換什麼幣值
2. 使用者可以輸入金額多少
3. 使用者可以確認幣值交換所得到的金額

## 專案開發人員
Snow[https://github.com/SnowWuChiKuo]

## 專案本地安裝流程
1. 請確認電腦已經安裝 Node.js、npm
2. 打開終端機，輸入以下指令將此專案 clone 到本地  
```
git clone https://github.com/SnowWuChiKuo/rateChange
```
3. 終端機移動至專案資料夾，輸入指令安裝套件
```
cd 專案資料夾
npm install
```
4. 請依照使用需求進行啟動
```
node app.js
```
5. 若終端機跑出以下內容，代表後端伺服器已經成功運作
```
Express is running on http://localhost:3000
```
6. 若需使用 api 請使用以下網址:
```
http://localhost:3000/apis
```
後面需要加上參數才可進行相關運算:
```
?source=USD&target=JPY&amount=$1,525
```
- source 是目前的貨幣  (目前的幣值 TWD, JPY, USD)
- target 是想兌換的貨幣  (目前的幣值 TWD, JPY, USD)
- amount 是想兌換的金額  
- 最後顯示在畫面上的是 兌換後的貨幣金額

## 後端開發工具
express: v4.16.4  
express-handlebars: v5.3.3  
body-parser: v1.20.2  
