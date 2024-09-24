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
});