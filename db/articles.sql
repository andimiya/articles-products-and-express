DROP DATABASE IF EXISTS articles_db;
DROP USER IF EXISTS articles_user;

CREATE USER articles_user;
CREATE DATABASE articles_db WITH OWNER articles_user;

\c articles_db;

CREATE TABLE article (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body VARCHAR,
  author VARCHAR
);

-- SEED DATA
INSERT INTO article_db (title, body, author)
  VALUES ('Title DbEntry', 'Body Text DbEntry', 'Author DbEntry');