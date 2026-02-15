import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('stats');

    if (req.method === 'GET') {
      const stats = await collection.findOne({ _id: 'views' });
      return res.status(200).json({ count: stats?.count || 0 });
    }

    if (req.method === 'POST') {
      const result = await collection.findOneAndUpdate(
        { _id: 'views' },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: 'after' }
      );
      return res.status(200).json({ count: result.value?.count || 1 });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
