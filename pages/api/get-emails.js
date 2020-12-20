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

export default async (_request, response) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('emails');

  try {
    const emails = await collection.find({}).toArray();
    const list = emails.map((em) =>{
      return {userName: em.userName, email: em.email }
    })

    return response.send(list);
    
  } catch (e) {
    console.log(e)
  }
}