const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index Page', function() {
    let serverInstance;

    before((done) => {
        serverInstance = app.listen(7865, () => {
            console.log('Test server running on port 7865');
            done();
        });
    });

    after((done) => {
        serverInstance.close(() => {
            console.log('Test server stopped');
            done();
        });
    });

    it('should return status code 200', function(done) {
        chai.request(serverInstance)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });

    it('should return the correct message', function(done) {
        chai.request(serverInstance)
        .get('/')
        .end((err,res) => {
            expect(res.text).to.equal('Welcome to the payment system');
            done();
        });
    });

    describe('Cart Page', function() {
        it('should return status code 200 when :id is a number', function(done) {
            chai.request(serverInstance)
            .get('/cart/123')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 123');
                done();
            });
        });

        it('should return status code 404 when :id is not a number', function(done) {
            chai.request(serverInstance)
            .get('/cart/abc')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
        });
    });

    describe('Available Payments', function() {
        it('should return availabale payment methods', function(done) {
            chai.request(serverInstance)
            .get('/available_payments')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
        });
    });
    describe('Login', function() {
        it('should return welcome message with username', function(done) {
            chai.request(serverInstance)
            .post('/login')
            .send({ userName: 'John' })
            .end((end, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome John');
                done();
            });
        });
        it('should return 400 if username is not provided', function(done) {
            chai.request(serverInstance)
            .post('/login')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.text).to.equal('Bad Request');
                done();
            });
        });
    });
});
