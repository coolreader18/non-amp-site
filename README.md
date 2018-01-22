# non-amp-site
An npm package to get the non-amp version of an amp site.

## Usage
```node
const nonAmp = require("non-amp-site")

nonAmp("https://website.com/amp/article.html").then(console.log)
// logs "https://website.com/article.html" or whatever the non-amp version is
```

## Installation
```shell
yarn add non-amp-site
```
or
```shell
npm install non-amp-site --save
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
