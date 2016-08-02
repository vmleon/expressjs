var expect = require('chai').expect;

describe('Mocha demo', function() {
  describe('Test 1', function() {
    it('Test that true is true', function() {
      expect(true).to.equal(true);
    });
  });

  describe('Test 2', function() {
    it('Test that false is false', function() {
      expect(false).not.to.equal(true);
    });
  });
});
