import express from "express" 
import {show ,inboxData,Dashboard_data} from "../database/show.js"

import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 router.get('/',urlencodedParser, (req, res) => {
    
     res.setHeader('Content-Type', 'application/json', "Access-Control-Allow-Origin", "*",
         "Access-Control-Allow-Credentials", true);

     // res.json((show(comicsName)))
     //  const resData = JSON.stringify(show(comicsName))
     // Filter all healthcare bios by region

    show()
    //  data.then((result) => {
    //      console.log(result);
    //      res.json(result);
    // })
})
router.get('/inbox',urlencodedParser, (req, res)=>{
let data=inboxData()
    data.then((result) => {
        console.log(result)
        res.json(result);

    })
})
router.get('/dashboard', urlencodedParser, (req, res) => {
    let data = Dashboard_data()
res.json(data)
})

export default router