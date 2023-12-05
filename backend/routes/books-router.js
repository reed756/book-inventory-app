import express from "express";

const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.get("/bookId", getBookById);
booksRouter.post("/", addBook);
booksRouter.put("/bookId", updateBook);
booksRouter.patch("/bookId", partiallyUpdateBook);
booksRouter.get("/search", searchBooks);

export default booksRouter;
