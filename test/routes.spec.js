var expect = require('chai').expect;
var request = require('request');

var base_url = "http://localhost:3000/";

describe('Testing routes to resources', function() {
  describe('Home page', function() {
    it('should return 200 status', function(done) {
      var url = base_url + "";
      request(url, (err, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('should contain "Home Mealdowlark Travel" in the response body', function(done) {
      var url = base_url + "";
      request(url, (err, response, body) => {
        expect(body).to.equal('Home Mealdowlark Travel');
        done();
      });
    });
  });
});

describe('Testing error routes', function() {
  describe('Resource not found', function() {
    it('should return 404 status', function(done) {
      var url = base_url + "notfound";
      request(url, (err, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
    it('should contain "404 - Not found" in the response body', function(done) {
      var url = base_url + "notfound";
      request(url, (err, response, body) => {
        expect(body).to.equal('404 - Not found');
        done();
      });
    });
  });
});
