const adminService = require('./admin.service');

class AdminController {
  async listUsers(req, res) {
    try {
      const users = await adminService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeUser(req, res) {
    try {
      await adminService.deleteUser(req.params.id);
      res.json({ message: 'User and their resources deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AdminController();
