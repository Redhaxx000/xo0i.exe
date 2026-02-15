const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('portfolio');
    const collection = db.collection('profile');

    if (event.httpMethod === 'GET') {
      const profile = await collection.findOne({ _id: 'main' });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(profile || {
          username: '@xo0i',
          bio: 'Digital architect navigating the retro-future.',
          status: 'Online'
        })
      };
    }

    if (event.httpMethod === 'POST') {
      const { username, bio, status } = JSON.parse(event.body);
      await collection.updateOne(
        { _id: 'main' },
        { $set: { username, bio, status, updatedAt: new Date() } },
        { upsert: true }
      );
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true })
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  } finally {
    await client.close();
  }
};

