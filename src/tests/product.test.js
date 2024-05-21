const request = require('supertest');
const app = require('../app');

test('GET /products debe traer todos los productos', async () => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /products debe crear un producto', async () => {
    const newProduct = {
        name: "Laptop Gamer",
        price: 1000,
        category: "Computers",
    }
    const res = await request(app).post('/products').send(newProduct);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(newProduct.name);
});
