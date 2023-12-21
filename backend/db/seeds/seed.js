import db from "../connection.js";
import format from "pg-format";

const createTable = async (tableName, tableSchema) => {
  await db.query(`DROP TABLE IF EXISTS ${tableName} CASCADE`);
  await db.query(tableSchema);
};

const seed = async (data) => {
  const { authorsData, booksData, categoriesData } = data;

  const authorsSchema = `
    CREATE TABLE authors (
      author_id serial primary key,
      first_name varchar(50) not null,
      last_name varchar(50) not null,
      birth_date timestamp not null,
      death_date timestamp,
      bio varchar(200) not null
    );
  `;

  const categoriesSchema = `
    CREATE TABLE categories (
      category_id serial primary key,
      name varchar(20) not null,
      description varchar(100) not null
    );
  `;

  const booksSchema = `
    CREATE TABLE books (
      book_id serial primary key,
      title varchar(50) not null,
      author_id int not null references authors(author_id),
      category_id int not null references categories(category_id),
      isbn varchar(13) NOT NULL,
      publication_date timestamp,
      description varchar(200) not null,
      price decimal not null,
      quantity_in_stock int,
      language varchar(50),
      format varchar(20)
    );
  `;

  // Create tables
  await createTable("authors", authorsSchema);
  await createTable("categories", categoriesSchema);
  await createTable("books", booksSchema);

  // Insert data
  const insertAuthorsQuery = format(
    `INSERT INTO authors (first_name, last_name, birth_date, death_date, bio) VALUES %L RETURNING *;`,
    authorsData.map((author) => [author.firstName, author.lastName, author.birthDate, author.deathDate, author.bio])
  );

  const insertCategoriesQuery = format(
    `INSERT INTO categories (name, description) VALUES %L RETURNING *;`,
    categoriesData.map((category) => [category.name, category.description])
  );

  const insertBooksQuery = format(
    `INSERT INTO books (title, author_id, category_id, isbn, publication_date, description, price, quantity_in_stock, language, format) VALUES %L RETURNING *;`,
    booksData.map((book) => [book.title, book.authorId, book.categoryId, book.isbn, book.publicationDate, book.description, book.price, book.quantityInStock, book.language, book.format])
  );

  await db.query(insertAuthorsQuery);
  await db.query(insertCategoriesQuery);
  await db.query(insertBooksQuery);
};

export default seed;
