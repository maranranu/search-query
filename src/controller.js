exports.searchQuery = function(req, res) {
  const searchQuery = (req.query.query).toLowerCase();

  if (searchQuery.length >= 3) {
    let searchResults = global.Trie.search(searchQuery)
    res.json({
      success: true,
      data: searchResults
    })
  } else {
    res.json({
      success: 'false',
      msg: 'Query string should be greater than 2'
    })
  }
}
