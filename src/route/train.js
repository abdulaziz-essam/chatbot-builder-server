import express from "express"
import bodyParser from "body-parser"
const router = express.Router()
router.use(express.json())
router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })

export default router.get('/', urlencodedParser, (req, res) => {

    console.log("train request received")
    res.send("good job")
})