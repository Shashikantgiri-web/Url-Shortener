// lib/mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useNewUrlParser: true,
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    if (!uri) {
      console.warn('Warning: MONGODB_URI is not defined in developmental environment')
      clientPromise = Promise.reject(new Error('Add Mongo URI to .env'))
    } else {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
      clientPromise = global._mongoClientPromise
    }
  } else {
    clientPromise = global._mongoClientPromise
  }
} else {
  if (!uri) {
    // During build, MONGODB_URI might be missing. 
    // We return a promise that rejects when called, but doesn't throw at module scope.
    clientPromise = Promise.reject(new Error('Add Mongo URI to .env'))
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
}

export default clientPromise