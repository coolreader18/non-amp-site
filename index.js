const metascraper = require('metascraper');
const got = require('got');
module.exports = function nonAmp(ampUrl) {
  return new Promise(async res => {
    const {body: html, url} = await got(ampUrl);
    res((await metascraper({html, url})).canonical);
  })
};
