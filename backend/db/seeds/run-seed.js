import testData from "../data/test-data/index.js";
import seed from "./seed.js";
import db from "../connection.js";

const runSeed = async () => {
  await seed(testData);
  return db.end();
};

runSeed();
