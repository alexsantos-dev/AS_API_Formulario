import request from 'supertest';
import app from '../index.js';

describe('GET /api/forms', () => {
    it('should call getAllForms controller', async () => {
        const response = await request(app).get('/api/forms');

        expect(response.status).toBe(200);
    });
});

describe('GET /api/forms', () => {
    it('should call getAllForms controller', async () => {
        const response = await request(app).get('/api/flings');

        expect(response.status).toBe(404);
    });
});
