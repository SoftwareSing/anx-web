del server\public\index.html
del server\public\main.*.js
del server\public\polyfills.*.js
del server\public\runtime.*.js
del server\public\styles.*.css
del server\public\3rdpartylicenses.txt
rmdir /S /Q server\public\assets

cd client
call npm run build
cd ..
robocopy client\dist server\public /S /IS
