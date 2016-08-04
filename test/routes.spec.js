var expect = require('chai').expect;
var request = require('request');

describe('Testing error routes', function() {
  describe('Resource not found', function() {
    it('should return a 404 status', function(done) {
      var url = "http://localhost:3000/notfound";
      request(url, function(err, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
    it('should contain "404 - Not found" in the response body', function(done) {
      var url = "http://localhost:3000/notfound";
      request(url, function(err, response, body) {
        expect(body).to.equal('404 - Not found');
        done();
      });
    });
  });
});
