const searchService = require('./search.service');

class SearchController {
  async search(req, res) {
    try {
      const { q } = req.query;
      const results = await searchService.performSearch(q);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SearchController();
