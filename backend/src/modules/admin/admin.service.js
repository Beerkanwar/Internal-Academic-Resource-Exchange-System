const prisma = require('../../config/db');

class AdminService {
  async getAllUsers() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async deleteUser(id) {
    // Delete resources uploaded by this user first to respect FK if any, or let Prisma handle cascade if enabled.
    // Since we didn't specify cascade and used simple strings, we should delete resources where uploaderId matches
    await prisma.resource.deleteMany({
      where: { uploaderId: id }
    });
    
    return await prisma.user.delete({
      where: { id }
    });
  }
}

module.exports = new AdminService();
