import { MongoClient, ServerApiVersion } from "mongodb";

const uri = ''

// if (process.env.MONGO_ACCESS) {
//   const uri = process.env.MONGO_ACCESS
// }

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

async function openConnection() {
  try {
    await client.connect(err => {
      const collection = client.db("AdventureDB").collection("Worlds")
      // perform actions on the collection object
      client.close()
      return 'Success'
    });
  } catch (err) {
    console.log('Error connecting to MongoDB:', err.message)
    return 'Failure'
  }
}

export { openConnection }