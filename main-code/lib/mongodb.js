// lib/mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    if (!uri) {
      console.warn('Warning: MONGODB_URI is not defined in developmental environment')
      clientPromise = Promise.resolve(null)
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
    clientPromise = Promise.resolve(null)
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
}

export default clientPromise