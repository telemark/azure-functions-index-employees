process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
const axios = require('axios')

module.exports = async context => {
  try {
    context.log(`get-data - ${process.env.SOURCE_URL} - start`)
    const { data } = await axios.get(process.env.SOURCE_URL)
    context.log(`get-data - ${process.env.SOURCE_URL} - ${data.length} - success`)
    return data.results
  } catch (error) {
    context.log.error(`get-data - ${process.env.SOURCE_URL} - ${error}`)
    return []
  }
}
