# AnxWeb
[![CI](https://travis-ci.org/SoftwareSing/anx-web.svg?branch=master)](https://travis-ci.org/SoftwareSing/anx-web)


可以透過 `npm start` 來編譯並開啟伺服器

使用 `npm run build` 來編譯在 [client](/client) 與 [server](/server) 內的code，編譯後的檔案預設存放在 [dist](/dist) 資料夾中

使用 `npm run serve` 來執行編譯完成的code


## 檔案結構

### client
[client](/client) 是前端的code，使用angular開發

單獨編譯前端時，可以輸入 `npm run build-client`

### server
[server](/server) 是後端的code，使用express開發

單獨編譯後端時，可以輸入 `npm run build-server`

### public
[public](/public) 是靜態檔案，伺服器會透過 `/public/:filename` 的路徑提供檔案

舉例來說，如果資料夾中有一個 `picture.jpg`

那他的路徑會是 `127.0.0.1/public/picture.jpg`


## TSLint
有關tslint的說明，參考以下連結

[TSLint配置小结](https://zhuanlan.zhihu.com/p/29970355) (簡中)

[TSLint 官方](https://palantir.github.io/tslint/rules/) (英文, 官網)

[eslint](http://eslint.cn/) (eslint有小部分相同規則可參考)


## 測試
目前的測試只有tslint，之後可能增加

可以透過指令 `npm test` 執行測試

每次發送 merge request 時將會自動測試
