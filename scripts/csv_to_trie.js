const fs = require('fs');
const csv = require('csv-parser');
const searchIndex = require('../src/search-index');
const path = require('path');

module.exports = {
  createTrie: function(Trie) {
    const inputFilePath = path.resolve(__dirname, 'data.csv');

    function clean(word) {
      if (word) {
        let str = word.replace(/[^a-zA-Z ]/g, "")
        return str.toLowerCase()
      } else {
        return ''
      }
    }

    fs.createReadStream(inputFilePath)
      .pipe(csv({
        separator: ','
      }))
      .on('data', function(data) {
        try {
          let originalStr = `${data['givenName']} ${data['middleName']} ${data['surname']}`
          Trie.insert(clean(data['givenName']), originalStr);
          Trie.insert(clean(data['middleName']), originalStr);
          Trie.insert(clean(data['surname']), originalStr);
        } catch (err) {
          console.log(err);
          throw new Error('Fail to append csv data to trie tree', err)
        }
      })
      .on('end', function() {
        console.log('csv data dump to trie tree and priority queue');
      });
  }
}
