export const getBooks = async (req, res, next) => {
  try {
    const books = await selectBooks();
    res.status(200).send({ books });
  } catch {
    next(err);
  }
};
export const getBookById = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const book = await selectBookById(bookId);
    res.status(200).send({ books });
  } catch {
    next(err);
  }
};
