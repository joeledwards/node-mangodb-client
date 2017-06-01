module.exports = () => {
  {
    put: (key, value) => new Future((r) => r()),
    get: (key) => new Future((r) => r({key: key, value: 1})),
  }
}
