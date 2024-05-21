const request = require('supertest');
const app = require('../app');

test('GET /cities debe traer todas las ciudades', async () => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
})
