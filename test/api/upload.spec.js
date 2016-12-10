var request = require('supertest');
var app = require('../../app');


describe('Upload API', () => {

  it('should response 200 OK', (done) => {
    request(app)
      .post('/api/upload')
      .expect(200)
      .end(done);
  });

});
