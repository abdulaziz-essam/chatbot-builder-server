import db from '../database/connect.js';
import  axios  from 'axios';
import fs  from 'fs';
import yaml  from 'js-yaml';
// import conDb from '../database/secConnect.js';
// con db connect with  second database

const show =async () => {
 

        axios.get('http://chatbuilders.xyz:4000/show').then(resp => {
                console.log(resp.data);
                let intentObjs = resp.data
                let yamlStr = yaml.dump(intentObjs);
                fs.writeFileSync('data-out.yaml', yamlStr, 'utf8');
               
        });

}

const inboxData=async()=>{
   try {
       let data = await db.collection("chatbot").findOne({
           email: "azozek1420@gmail.com"
        })
        
       return data;  
   } catch (error) {
       console.log(error)
   }
 
}

const Dashboard_data = async()=>{
    
    try {
        let data = await db.collection('conversations').find({}, { "latest_message.text": 1 }).limit(3).toArray(function (err, result) {
            if (err) throw err;

console.log(result)
 
            db.close();
            return data;
        });
    }
     catch (error){
        console.log(error)
    }
}
export  {show ,inboxData , Dashboard_data}