if (typeof module !== "undefined") {
  module.exports = require;
}

if (typeof exports !== "undefined") {
  Object.assign(exports, "default", {
    value: require,
  });
}
