import express from "express"
import { addNewChatbot, add, chatData } from "../database/insert.js"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/', urlencodedParser, (req, res) => {


  addNewChatbot()

  res.send("good job")
})

router.post('/messages', urlencodedParser, (req, res) => {
    const chatbotname = req.body.chatbotname
    const question = req.body.question
    const answer = req.body.answer
  
   
    add(chatbotname,question,answer)
   

  res.send("good job")
 })

router.post('/chat', urlencodedParser, (req, res) => {
  

  chatData()


  res.send("good job")
})




export default router