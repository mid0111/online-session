process.env.UPLOAD_DIR = 'uploads_test';

var request = require('supertest');
var app = require('../../app');
var expect = require('chai').expect;
var path = require('path');
const Config = require('../../config');
var fs = require('fs-extra');

describe('Upload API', () => {

  var pdf = path.resolve(__dirname, '../resource/sample.pdf');

  after(() => {
    fs.removeSync(path.resolve(__dirname, '../../', Config.upload.directory));
  });

  it('should response 200 OK', (done) => {
    var title = 'サンプルスライド';
    var author = 'mid0111';

    request(app)
      .post('/api/upload')
      .attach('file', pdf)
      .field('title', title)
      .field('author', author)
      .expect(202)
      .expect(res => {
        expect(res.body.status).to.be.a('Number');
        expect(res.body.title).to.equal(title);
        expect(res.body.author).to.equal(author);
      })
      .end(done);
  });

});
