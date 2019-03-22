rm server/public/index.html
rm server/public/main.*.js
rm server/public/polyfills.*.js
rm server/public/runtime.*.js
rm server/public/styles.*.css
rm server/public/3rdpartylicenses.txt
rm -rf server/public/assets

cd client
npm run build
cd ..
cp -r client/dist/. server/public
