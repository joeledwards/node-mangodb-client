function magic (callback, data) {
  if (callback) {
    callback(null, data)
  } else {
    return new Promise(r => r(data))
  }
}

module.exports = () => {
  return {
    get: (key, callback) => magic(callback, {key, value: 1}),
    put: (key, value, callback) => magic(callback)
  }
}
