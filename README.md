# AnxWeb
[![CI](https://travis-ci.org/SoftwareSing/anx-web.svg?branch=master)](https://travis-ci.org/SoftwareSing/anx-web)



## 開發
使用vscode做編輯器，已針對vscode做設定，其餘編輯器需自行設定

### vscode-plugins
**以下plugin必須安裝以確保coding style一致**

[phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs)

[php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer)

[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### 安裝
在 [client](client) 資料夾下執行 `npm install`

在 [server](server) 資料夾下執行 `composer install`


### 編譯
執行腳本([windows-build.bat](windows-build.bat) or [linux-build.sh](linux-build.sh))編譯client

透過腳本編譯會自動將編譯後的檔案放入 [server/public](server/public)


### 測試
在 [client](client) 資料夾下執行 `npm test`

在 [server](server) 資料夾下執行 `composer test`

### 預覽
完成 `client` 編譯後，在 [server](server) 資料夾下透過 `php artisan serve` 來預覽server是否正常運作



## 檔案結構

### client
[client](client) 是前端的code，使用`angular`開發

可以在[client](client)資料夾下輸入 `npm run build` 編譯前端 (透過npm命令build並不會自動複製到server)


### server
[server](server) 是後端的code，使用`Laravel`開發

server端首頁依賴client端編譯後的檔案，請[編譯](#編譯)後再測試



## TSLint
tslint是檢查typescript coding style的工具

有關tslint的說明，參考以下連結

[TSLint配置小结](https://zhuanlan.zhihu.com/p/29970355) (簡中)

[TSLint 官方](https://palantir.github.io/tslint/rules/) (英文, 官網)

[eslint](http://eslint.cn/) (eslint有小部分相同規則可參考)


## PSR2
PSR2是目前採用php風格規範

由於php規則過於複雜，暫時不考慮自寫一套規則

PSR2的規範可以參考以下連結

https://www.php-fig.org/psr/psr-2/

https://oomusou.io/php/php-psr2/


## 自動測試
目前的自動測試只有針對coding style做檢查，之後可能增加

每次發送 merge request 時將會自動測試
