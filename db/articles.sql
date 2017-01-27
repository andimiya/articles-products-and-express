DROP DATABASE IF EXISTS articles;
CREATE DATABASE articles;

\c articles;

CREATE TABLE article (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  body VARCHAR,
  author VARCHAR
);

INSERT INTO pups (name, breed, age, sex)
  VALUES ('Tyler', 'Retrieved', 3, 'M');