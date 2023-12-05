import express from "express";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/categoryId/books", getBooksByCategory);

export default categoriesRouter;
