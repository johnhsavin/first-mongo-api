// import libraries
import express from "express"
import cors from "cors"
import {getAllPlants, addPlant } from  "./src/plants.js"
// make port a variable
const PORT = 3005
// create express app
const app = express()
// use json. Don't forget the pink lips
app.use(express.json())
// use cors. Don't forget the pink lips
app.use(cors())
//function routes
app.get("/plants", getAllPlants)
app.post("/plants", addPlant)
// app.delete("/plants/:plantId", deletePlant)


app.listen(PORT, () => {
console.log(`listening on http://localhost:${PORT}...`) // template literal creates string
})
// console.log("Listening on http://localhost:" + PORT + "...") same as above
