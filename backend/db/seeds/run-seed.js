import testData from "../data/test-data";
const seed = require("./seed.js");
const db = require("../connection.js");

const runSeed = () => {
  return seed(testData).then(() => db.end());
};

runSeed();
