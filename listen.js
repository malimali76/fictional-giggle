//Connect To mongoDB
const {MongoClient, ObjectId} = require('mongodb');
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

app.put('/new-bid/:driverid', (req, res) => {
  ID = req.params.driverid;
  query = {_id: new ObjectId(req.body.shipmentid)};
  newvalues = { $set: {driverid: ID} };
  const db = client.db('project_holder');
  console.log('pressed')
  db.collection('shipments').updateOne(query, newvalues)

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

  app.get('/driver-login/:email', async (req, res) => {
    try {
      const email = req.params.email
      const db = client.db('project_holder');
      const driver = await db.collection('drivers').findOne({email: email});
      res.json(driver);
  }
  catch(error){
      res.status(500).json({'message':"Error fetching User"});
      console.log(error)
    }
  })

  app.get('/dashboard/:shipperid', async (req, res) => {
    try {
      const ID = req.params.shipperid
      const db = client.db('project_holder');
      const shipments = await db.collection('shipments').find({shipperid: ID}).toArray();
      res.json(shipments);
  }
  catch(error){
      res.status(500).json({'message':"Error fetching User"});
      console.log(error)
    }
  })

  app.get('/driver-dashboard/:driverid', async (req, res) => {
    try {
      const ID = req.params.driverid
      const db = client.db('project_holder');
      const shipments = await db.collection('shipments').find({driverid: ID}).toArray();
      res.json(shipments);
  }
  catch(error){
      res.status(500).json({'message':"Error fetching User"});
      console.log(error)
    }
  })

  app.get('/dashboard/shipmentdetials/:shipmentID', async (req, res) => {
    try {
      const ID = req.params.shipmentID
      const db = client.db('project_holder');
      const shipments = await db.collection('shipments').findOne({shipmentid: ID});
      res.json(shipments);
  }
  catch(error){
      res.status(500).json({'message':"Error fetching User"});
      console.log(error)
    }
  })

  app.get('/driver-dashboard/live-shipments/:driverid', async (req, res) => {
    try {
      const ID = req.params.driverid
      const db = client.db('project_holder');
      const shipments = await db.collection('shipments').find({driverid: {$nin: [ID] } }).toArray();
      res.json(shipments);
  }
  catch(error){
      res.status(500).json({'message':"Error fetching User"});
      console.log(error)
    }
  })

  app.post('/new-shipment', (req, res) => {
    const db = client.db('project_holder');
    db.collection('shipments').insertOne(req.body)
  
  })
