const resourcesService = require('./resources.service');

class ResourcesController {
  async upload(req, res) {
    try {
      const { title, description, subject } = req.body;
      const uploaderId = req.user.userId;

      if (!req.file) {
        return res.status(400).json({ error: 'File is required' });
      }

      const filePath = req.file.path;

      const resource = await resourcesService.uploadResource(
        title, description, subject, uploaderId, filePath
      );
      
      res.status(201).json(resource);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const { status } = req.query;
      const resources = await resourcesService.getResources(status);
      res.json(resources);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getOne(req, res) {
    try {
      const resource = await resourcesService.getResourceById(req.params.id);
      if (!resource) return res.status(404).json({ error: 'Not found' });
      res.json(resource);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async remove(req, res) {
    try {
      await resourcesService.deleteResource(req.params.id, req.user.userId, req.user.role);
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ResourcesController();
