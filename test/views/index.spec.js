const client = require('../lib/client');
const expect = require('chai').expect;

describe('/', () => {

  it('should response 200 OK', (done) => {
    client
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});
