//Connect To mongoDB
const {MongoClient} = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2';
const client = new MongoClient(uri);
const bodyParser = require('body-parser');

async function connectToMongo(){
  try {
      await client.connect();
      console.log('Connected to MongoDB');
    }
  catch (error) {
          console.error('Error connecting to MongoDB:', error);
      }
}
connectToMongo();

//Listen on Port 3000
const express = require('express')
const app = express()
const port = 3000
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/new-account', (req, res) => {
  const db = client.db('project_holder');
  db.collection('shippers').insertOne(req.body)

})

app.get('/login/:email', async (req, res) => {
    try {
      const email = req.params.email
      const db = client.db('project_holder');
      const shippers = await db.collection('shippers').findOne({email: email});
      res.json(shippers);
  }
  catch(error){
      res.status(500).json({'message':"Error fetching User"});
      console.log(error)
    }
  })
  