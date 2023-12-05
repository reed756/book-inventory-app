import express from "express";

const authorsRouter = express.Router();

authorsRouter.get("/", getAuthors);
authorsRouter.get("/:author_id/books", getBooksByAuthor);

export default authorsRouter;
