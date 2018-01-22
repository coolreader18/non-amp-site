# non-amp-site
An npm package to get the non-amp version of an amp site.

## Usage
```node
const nonAmp = require("non-amp-site")

nonAmp("https://website.com/amp/article.html").then(console.log)
// logs "https://website.com/article.html" or whatever the non-amp version is
```
