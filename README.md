es6-module-boilerplate
====

use this as a starting point for creating es6 modules that have a build script to make an es5 version that gets used by default.

Notice package.json has these lines
```js
"main": "src/es5/index.js",
"main-es6": "src/es6/index.js",
 ```

keep this format, including the dir structure so that it's easy to use with something like [require-es6](https://www.npmjs.org/package/require-es6)


The workflow would look something like this
```bash
git clone https://github.com/kolodny/es6-module-boilerplate
rm -rf .git
git init
npm install
npm init
```

Ideas and pull requests welcomed
===
