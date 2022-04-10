import express from "express" 
import show from "../database/show.js"

import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 export default  router.get('/',urlencodedParser, (req, res) => {
    
     res.setHeader('Content-Type', 'application/json', "Access-Control-Allow-Origin", "*",
         "Access-Control-Allow-Credentials", true);

     // res.json((show(comicsName)))
     //  const resData = JSON.stringify(show(comicsName))
     // Filter all healthcare bios by region

     let data = (show())
     data.then((result) => {
         console.log(result);
         res.json(result);
    })
})