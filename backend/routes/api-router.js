import express from "express";

const router = express.Router();

router.use("books", booksRouter);
router.use("authors", authorsRouter);
router.use("categories", categoriesRouter);

export default router;
