DROP DATABASE IF EXISTS articles;
CREATE DATABASE articles;

\c articles;

CREATE TABLE article (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body VARCHAR,
  author VARCHAR
);

INSERT INTO article (title, body, author)
  VALUES ('Title DbEntry', 'Body Text DbEntry', 'Author DbEntry');