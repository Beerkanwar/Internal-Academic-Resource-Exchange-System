const verificationService = require('./verification.service');

class VerificationController {
  async getPending(req, res) {
    try {
      const resources = await verificationService.getPendingRequests();
      res.json(resources);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async approve(req, res) {
    try {
      const resource = await verificationService.verifyResource(req.params.id, 'approve');
      res.json(resource);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async reject(req, res) {
    try {
      const resource = await verificationService.verifyResource(req.params.id, 'reject');
      res.json(resource);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new VerificationController();
