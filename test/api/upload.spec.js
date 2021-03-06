const client = require('../lib/client');

const expect = require('chai').expect;
const path = require('path');
const Config = require('../../config');
const fs = require('fs-extra');

describe('Upload API', () => {
  const pdf = path.resolve(__dirname, '../resource/sample.pdf');

  after(() => {
    fs.removeSync(path.resolve(__dirname, '../../', Config.upload.directory));
  });

  it('should response 200 OK', (done) => {
    const title = 'サンプルスライド';
    const author = 'mid0111';

    client
      .post('/api/upload')
      .attach('file', pdf)
      .field('title', title)
      .field('author', author)
      .expect(200)
      .expect((res) => {
        expect(res.body.status).to.be.a('Number');
        expect(res.body.title).to.equal(title);
        expect(res.body.author).to.equal(author);
      })
      .end(done);
  });
});
