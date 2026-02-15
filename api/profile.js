import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('profile');

    if (req.method === 'GET') {
      const profile = await collection.findOne({ _id: 'main' });
      return res.status(200).json(profile || {
        username: '@xo0i',
        bio: 'Digital architect navigating the retro-future.',
        status: 'Online'
      });
    }

    if (req.method === 'POST') {
      const { username, bio, status } = req.body;
      await collection.updateOne(
        { _id: 'main' },
        { $set: { username, bio, status, updatedAt: new Date() } },
        { upsert: true }
      );
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

