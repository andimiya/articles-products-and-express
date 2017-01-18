const products = require('../routes/products');
const supertest = require('supertest');
const chai = require ('chai');
chai.should();

const agent = supertest.agent(products);

describe ('Products POST', () => {
  const endpoint = '/products';
  describe(`GET ${endpoint}`, () => {

    it('should return the products page', done => {
      agent.get(endpoint)
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        console.log('res', res);
        res.text.should.be.equal('<html><body><h1>Hello API Server</h1></body></html>');
        done();
      });
    });
  });

});