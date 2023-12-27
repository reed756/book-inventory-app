export const getAuthors = async (req, res, next) => {
  try {
    const authors = await selectAuthors();
    res.status(200).send({ authors });
  } catch {
    next(err);
  }
};

export const getBooksByAuthor = async (req, res, next) => {
  try {
    const { authorId } = req.params;
    const booksByAuthor = await selectBooksByAuthor(authorId);
    res.status(200).send({ booksByAuthor });
  } catch {
    next(err);
  }
};

authorsRouter.get("/:author_id/books", getBooksByAuthor);
