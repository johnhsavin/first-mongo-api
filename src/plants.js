// import db 
import { db } from "./connectDB.js"
// create function to import into index.js
// function to get all plants
export function getAllPlants(req, res) {
db.collection("plants").find({}).toArray()
// const plants = await db.collection("plants").find({}).toArray()
.then(plants => {       // alternative code to async / await
    res.send(plants)
})   
.catch(err => { //catch error and respond
    res.status(500).send({ success: false, message: err }) // set status if error and send response to client
})
}
// Add plant to db
export function addPlant(req, res) {
    const newPlant = req.body
    db.collection("plants").insertOne(newPlant)
    .then(() => {       // successful entry to db
res.status(201).send({ message: "Plant added", success: true })
    })
    .catch (err => {    // error 
        res.status(500).send({ success: false, message: err })
    })
}