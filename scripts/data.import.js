var fs = require("fs");
var firebase = require('firebase');

var _pushAll = function (ref, values) {
  values.forEach(function (value) {
    ref.push(value);
  })
}

var data = JSON.parse(fs.readFileSync('resources/data.json'));

firebase.initializeApp({
  databaseURL: 'https://test-6b408.firebaseio.com',
  serviceAccount: 'resources/.credentials.test-5507f411b732.json'
});
var db = firebase.database();

_pushAll(db.ref('/types'), data.categories);
_pushAll(db.ref('/categories'), data.types);
_pushAll(db.ref('/items'), data.items);
