var start = require('./common');
var mongoose = start.mongoose;
var assert = require('power-assert');

describe('connection:', function() {
  describe('supports authSource', function() {
    it('in querystring', function(done) {
      var conn = mongoose.createConnection();
      conn._open = function() {
        assert.ok(conn.options);
        assert.ok(conn.options.auth);
        assert.equal(conn.options.auth.authSource, 'users');
        conn.close(done);
      };
      conn.open(start.uri + '?authSource=users');
    });

    it('passed as an option', function(done) {
      var conn = mongoose.createConnection();
      conn._open = function() {
        assert.ok(conn.options);
        assert.ok(conn.options.auth);
        assert.equal(conn.options.auth.authSource, 'users');
        conn.close(done);
      };
      conn.open(start.uri, {auth: {authSource: 'users'}});
    });
  });
});

describe('connection:', function() {
  describe('supports authMechanism', function() {
    it('in querystring', function(done) {
      var conn = mongoose.createConnection();
      conn._open = function() {
        assert.ok(conn.options);
        assert.ok(conn.options.auth);
        assert.equal(conn.options.auth.authMechanism, 'PLAIN');
        conn.close(done);
      };
      conn.open(start.uri + '?authMechanism=PLAIN');
    });

    it('passed as an option', function(done) {
      var conn = mongoose.createConnection();
      conn._open = function() {
        assert.ok(conn.options);
        assert.ok(conn.options.auth);
        assert.equal(conn.options.auth.authMechanism, 'PLAIN');
        conn.close(done);
      };
      conn.open(start.uri, {auth: {authMechanism: 'PLAIN'}});
    });
  });
});
