import db from '../database/connect.js';


const show =async () => {
 


       
        let data = await  db.collection("chatbot").findOne({ email: "azozek1420@gmail.com" })
                console.log(data);
                db.save;
                return data;

}
export default show