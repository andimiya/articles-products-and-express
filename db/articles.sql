DROP DATABASE IF EXISTS articles_db;
DROP USER IF EXISTS articles_user;

CREATE USER articles_user;
CREATE DATABASE articles_db WITH OWNER articles_user;
ALTER USER articles_user WITH PASSWORD 'password';

\c articles_db articles_user;

DROP TABLE IF EXISTS article;
CREATE TABLE article (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body VARCHAR,
  author VARCHAR
);

-- SEED DATA
INSERT INTO article (title, body, author)
  VALUES ('Title DbEntry', 'Body Text DbEntry', 'Author DbEntry');