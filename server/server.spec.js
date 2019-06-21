const server = require('./server.js')

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
});
