const prisma = require('../../config/db');

class SearchService {
  async performSearch(keyword) {
    if (!keyword) {
        return [];
    }
    
    return await prisma.resource.findMany({
      where: {
        status: 'APPROVED',
        OR: [
          { title: { contains: keyword, mode: 'insensitive' } },
          { description: { contains: keyword, mode: 'insensitive' } },
          { subject: { contains: keyword, mode: 'insensitive' } }
        ]
      },
      orderBy: { createdAt: 'desc' }
    });
  }
}

module.exports = new SearchService();
