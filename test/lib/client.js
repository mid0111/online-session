process.env.UPLOAD_DIR = 'uploads_test';

const request = require('supertest');
const app = require('../../app');

module.exports = request(app);
