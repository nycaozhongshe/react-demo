if (process.env.NODE_EMV === "production") {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}