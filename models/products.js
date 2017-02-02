//pg-promise uses BlueBird

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();

const database = pgp({
  host: 'localhost',
  port: 5432,
  database: 'products_db',
  user: 'products_user',
  password: PG_PASS

});

const getAllProducts = () => {
  return database.any('SELECT * FROM product_table');
};

const addNewProduct = (name, price, inventory) => {
  return database.any(`INSERT INTO product_table (name, price, inventory) VALUES ('${name}', '${price}', '${inventory}')`);
};

const getProductId = (id) => {
  return database.any(`SELECT * FROM product_table WHERE id = '${id}'`);
};

const getProductByNametoEdit = (id) => {
  return database.any(`SELECT * FROM product_table WHERE id = '${id}'`);
};

const editProduct = (id, price, inventory) => {
  return database.any(`UPDATE product_table SET price = '${price}', inventory = '${inventory}' WHERE id = '${id}'`);
};

const deleteProduct = (id) => {
  return database.any(`DELETE FROM product_table WHERE id = '${id}'`);
};

module.exports = {
  getAllProducts: getAllProducts,
  addNewProduct: addNewProduct,
  getProductId: getProductId,
  getProductByNametoEdit: getProductByNametoEdit,
  editProduct: editProduct,
  deleteProduct: deleteProduct
};