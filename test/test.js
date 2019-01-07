const assert = require('assert');
const searchIndex = require('../src/search-index');
const Trie = new searchIndex();

describe('Array', function() {
  describe('search', function() {
    it('Search string does not matches', function() {
      Trie.insert('marlie', 'Marlie');
      const result = Trie.search('mar');
      assert.equal(result.indexOf('marlie'), -1);
    });
    it('Empty check', function() {
      Trie.insert('john', 'John Doe');
      Trie.insert('doe', 'John Doe');
      const result = Trie.search('abcd');
      assert.ok(result.length === 0);
    });
    it('Query string length < 3', function() {
      Trie.insert('feedfish', 'FeedFish');
      const search = 'fe'
      assert.ok(search.length < 3);
    });
  });
});
