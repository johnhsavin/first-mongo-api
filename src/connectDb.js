// import db tool that allows us to connect 
import { MongoClient} from "mongodb"
// credentials
import { connectionString } from "../secrets.js"

const client = new MongoClient(connectionString) // creates client

await client.connect() // connect to client
.catch(console.error)
   
export const db = client.db("MyPlants") // allows other files to use 



