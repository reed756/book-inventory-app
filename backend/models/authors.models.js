import db from "../connection.js";

export const selectAuthors = () => {
  const authors = db.query(`SELECT * FROM authors`);
  return authors.rows;
};
