module.exports = () => {
  return {
    put: (key, value) => new Promise((r) => r()),
    get: (key) => new Promise((r) => r({key: key, value: 1})),
  }
}
