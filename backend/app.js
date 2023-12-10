import express from "express";
import router from "./routes/api-router.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use("api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
