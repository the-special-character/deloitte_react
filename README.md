# Webpack Setup


1. `npm init`
2. create "src" folder and add index.js and app.js file
3. `npm install -D webpack`
4. add script in "package.json" `"build": "webpack",`
5. for custom webpack config create "webpack.config.js" file at root
6. use [webpack](https://webpack.js.org/concepts/) link to setup costome config
7. to setup babel follow [Babel](https://babeljs.io/setup#installation) link
8. `npm install --save-dev babel-loader @babel/core`
9. `npm install -D @babel/preset-env`
10. setup .babelrc file
   ```json
    {
        "presets": ["@babel/preset-env"]
    }
   ```