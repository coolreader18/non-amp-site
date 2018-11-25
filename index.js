var got = require("got");
var cheerio = require("cheerio");

module.exports = function nonAmp(ampUrl) {
  return got(ampUrl).then(res => {
    var $ = cheerio.load(res.body);
    var head = $("head");
    if (head.attr("amp") !== undefined || head.attr("⚡") !== undefined) {
      return $("link[rel=canonical]").attr("href");
    } else {
      throw new Error("Document is not an AMP Page");
    }
  });
};
