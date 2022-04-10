import express from "express"
import { add, addMessage} from "../database/insert.js"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 router.post('/',urlencodedParser, (req, res) => {
    const data = req.body.data
const author = req.body.author
const type = req.body.type
 
     addMessage(data, author, type)

    res.send("good job")
})


router.post('/messages', urlencodedParser, (req, res) => {
    const data = req.body.data
const author = req.body.author
const type = req.body.type
addMessage(data, author, type)
   

  res.send("good job")
 })
export default router