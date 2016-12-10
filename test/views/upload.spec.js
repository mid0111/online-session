const client = require('../lib/client');
const expect = require('chai').expect;

describe('/upload', () => {

  it('should response 200 OK', (done) => {
    client
      .get('/upload')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done);
  });
});
