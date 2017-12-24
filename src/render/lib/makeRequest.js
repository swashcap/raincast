/* global API_URL,fetch */
const makeRequest = endpoint => fetch(`${API_URL}${endpoint}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(
        `Error with request ${endpoint}: ${response.status} ${response.statusText}`
      )
    }

    return response.json()
  })

module.exports = makeRequest
