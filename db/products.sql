DROP DATABASE IF EXISTS products_db;
DROP USER IF EXISTS products_db;

CREATE USER products_user;
CREATE DATABASE products_db WITH OWNER products_user;
ALTER USER products_user WITH PASSWORD 'password';

\c products_db products_user;

DROP TABLE IF EXISTS product_table;
CREATE TABLE product_table (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  price INTEGER,
  inventory INTEGER
);

-- SEED DATA
INSERT INTO product_table (name, price, inventory)
  VALUES ('namevalue', 12, 123);