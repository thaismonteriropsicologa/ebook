import { MongoClient, Db } from 'mongodb';
import url from 'url';

let cachedDb = null

async function connectToDatabase (uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);
  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request, response) => {
  const { email } = request.body; 

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('emails');

  try {
    const savedEmail = await collection.findOne({email});

    if (!savedEmail) {
      await collection.insertOne({
        email,
        subscribedAt: new Date(),
      });
    }
    
  } catch (e) {
    console.log(e)
  }

  

  return response.status(201).json({ ok: true});
}