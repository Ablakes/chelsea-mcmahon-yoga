// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Alex/Desktop/CMY/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Alex/Desktop/CMY/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Alex/Desktop/CMY/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Alex/Desktop/CMY/src/pages/About.js")),
  "component---src-pages-art-js": preferDefault(require("/Users/Alex/Desktop/CMY/src/pages/art.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Alex/Desktop/CMY/src/pages/index.js")),
  "component---src-pages-schedule-js": preferDefault(require("/Users/Alex/Desktop/CMY/src/pages/schedule.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Alex/Desktop/CMY/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/Alex/Desktop/CMY/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/Alex/Desktop/CMY/.cache/json/404.json"),
  "about.json": require("/Users/Alex/Desktop/CMY/.cache/json/about.json"),
  "art.json": require("/Users/Alex/Desktop/CMY/.cache/json/art.json"),
  "index.json": require("/Users/Alex/Desktop/CMY/.cache/json/index.json"),
  "schedule.json": require("/Users/Alex/Desktop/CMY/.cache/json/schedule.json"),
  "404-html.json": require("/Users/Alex/Desktop/CMY/.cache/json/404-html.json")
}