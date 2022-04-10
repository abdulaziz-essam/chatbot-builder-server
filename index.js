import express from 'express';
import update from "../server/src/route/updateRoute.js";
import show from '../server/src/route/showRoute.js'
import insert from "./src/route/addRoute.js"
import bodyParser from "body-parser"
import deleteMethod from '../server/src/route/deleteRoute.js'
import cors from "cors"
const app = express()

const port = 4143
app.use(cors())
app.use('/update',update)
app.use('/show',show)
app.use("/add" ,insert )
app.use("/delete",deleteMethod)
app.use(express.json())
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
const  urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.post('/update',urlencodedParser, (req, res) => {
//     const oldData = req.body.oldData
//     const newData = req.body.newData
//     update(oldData, newData)
// console.log(req.body.oldData)
//     res.send("good job"+req.body)
// })
app.listen(port, () => console.log(`hi Example app listening on port ${port}!`))
