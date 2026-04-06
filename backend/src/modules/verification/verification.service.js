const prisma = require('../../config/db');

class VerificationService {
  async getPendingRequests() {
    return await prisma.resource.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'asc' }
    });
  }

  async verifyResource(id, action) {
    const status = action === 'approve' ? 'APPROVED' : 'REJECTED';
    return await prisma.resource.update({
      where: { id },
      data: { status }
    });
  }
}

module.exports = new VerificationService();
