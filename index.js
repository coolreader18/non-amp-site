const metascraper = require('metascraper');
const got = require('got');
module.exports = async function nonAmp(ampUrl) {
  const {body: html, url} = await got(ampUrl);
  return (await metascraper({html, url})).canonical;
};
