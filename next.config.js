require('dotenv').config()

module.exports = {
  env: {
    DOMAIN: process.env.DOMAIN,
    STORE_FRONT_ACCESS_TOKEN:process.env.STORE_FRONT_ACCESS_TOKEN
  }
}