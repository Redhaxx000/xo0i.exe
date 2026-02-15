const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('portfolio');
    const collection = db.collection('stats');

    if (event.httpMethod === 'GET') {
      const stats = await collection.findOne({ _id: 'views' });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ count: stats?.count || 0 })
      };
    }

    if (event.httpMethod === 'POST') {
      const result = await collection.findOneAndUpdate(
        { _id: 'views' },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: 'after' }
      );
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ count: result.value?.count || 1 })
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

