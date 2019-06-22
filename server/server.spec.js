const server = require('./server.js')
const db = require('../yogurt/yogurtModel')
const supertest = require('supertest')

describe('server', () => {
    describe('TEST', () => {
        it('responds with 200 OK', () => {
            return supertest(server).get('/').expect(200)
         });
    });

    describe('POST yogurt endpoint responds with 200 and objects', () => {
        const mockData = {
            "name": "Logai",
            "type": "regular"
        }
        it('responds with 201', (done) => {
            return supertest(server)
            .post('/yogurt')
            .send(mockData)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });

        it('responds with 500 when sent no data', (done) => {
            return supertest(server)
            .post('/yogurt')
            
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end((err) => {
                if (err) return done(err);
                done();
            });
        });
    });

    describe('DELETE yogurt endpoint responds with 200/deleted yogurt successfully', () => {
        it('deleted yogurt successfully', () => {
            return supertest(server)
            .delete(`/yogurt/3`)
            .then(res => {
                expect(res.body).toEqual({
                    "message": "deleted yogurt successfully"
                  })
            })
        });
        it('responds with 200', () => {
            return supertest(server)
            .delete(`/yogurt/2`)
            .expect(200)
        });

        it('responds with 404 when sent bad id', () => {
            return supertest(server)
            .delete(`/yogurt/99999999`)
            .expect(404)
        });
    }); 
});
