const prisma = require('../../config/db');

class ResourcesService {
  async uploadResource(title, description, subject, uploaderId, filePath) {
    return await prisma.resource.create({
      data: {
        title,
        description,
        subject,
        uploaderId,
        filePath,
        status: 'PENDING'
      }
    });
  }

  async getResources(status) {
    // defaults to APPROVED if no status is specified explicitly for public viewing
    const queryStatus = status || 'APPROVED';
    return await prisma.resource.findMany({
      where: { status: queryStatus },
      orderBy: { createdAt: 'desc' }
    });
  }

  async getResourceById(id) {
    return await prisma.resource.findUnique({
      where: { id }
    });
  }

  async deleteResource(id, userId, role) {
    const resource = await prisma.resource.findUnique({ where: { id } });
    if (!resource) throw new Error('Resource not found');

    if (role !== 'admin' && resource.uploaderId !== userId) {
      throw new Error('Unauthorized to delete this resource');
    }

    return await prisma.resource.delete({ where: { id } });
  }
}

module.exports = new ResourcesService();
