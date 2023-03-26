import { MongoClient } from "mongodb"


export default async function handler(req, res) {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/user')
    
    if (req.method === 'POST') {
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        const db =  client.db()

       await db.collection('users').insertOne({username, email, password})


    }else{
        const db = client.db()

        const data = await db.collection('users').find().toArray()

        res.json({user : data})
    }

  }