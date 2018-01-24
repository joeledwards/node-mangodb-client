const assert = require('assert')
const mango = require('../lib/index')()

const CORRECT_VALUE = 1

mango.put("place", "stuff", () => {
  mango.get("place", (error, result) => {
    assert.equal(error, null)
    assert.equal(result.value, CORRECT_VALUE)
    testPromiseApi()
  })
})

function testPromiseApi () {
  mango.put("place", "thing")
  .then(() => mango.get("place"))
  .then(result => {
    assert.equal(result.key, "place")
    assert.equal(result.value, CORRECT_VALUE)
  })
  .then(() => console.log("yay"))
  .catch(error => {
    console.log("Thing doesn't work:", error)
    process.exit(1)
  })
}
