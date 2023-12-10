import booksRouter from "./books-router.js";
import authorsRouter from "./authors-router.js";
import categoriesRouter from "./categories-router.js";

import express from "express";

const router = express.Router();

router.use("books", booksRouter);
router.use("authors", authorsRouter);
router.use("categories", categoriesRouter);

export default router;
