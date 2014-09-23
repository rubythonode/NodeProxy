#!/usr/bin/env node
var debug = require('debug')('nodeproxy');
var app = require('../app');

app.set('port', process.env.PORT || 3040);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
