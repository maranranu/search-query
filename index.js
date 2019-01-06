const express = require('express');
const csvToTrie = require('./scripts/csv_to_trie');
const Trie = require('./src/search-index');

const app = express();

app.use(express.static(__dirname + "/public"));
require('./src/routes')(app);

app.listen(3000, function () {
  console.log('Application listening on port 3000');
})

global.Trie = new Trie();
csvToTrie.createTrie(global.Trie);
