import db from '../database/connect.js';
const add = async (chatbotname,question,answer) => {


    try {
        
        await db.collection('chatbot').updateOne(
            { chatbotname: chatbotname },
            { $push: { 'questions.intents.examples': question
        ,"questions.intents.0.responses":answer 
     } }
        )
    
    console.log("good job ")
        
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
const addNewChatbott = async (chatbotname) => {
    try{
        await db.collection('chatbot').insertOne({
            chatbotname: chatbotname, email: "azozek1420@gmail.com",
            questions: {
                "intents": [
                    {

                    }],
                stories: [{
                    story: ""
                    , steps: []
                }]
            }
        })
        db.save

    }catch(err){console.log(err)}
 

}

const addNewChatbot = async () => {
    try {
        await db.collection('chatbot').insertOne({
            chatbotname: "coffee shop", email: "azozek1420@gmail.com",
            questions: {
                "nlu": [
                    {intent:"greet",
                        examples: ["Hi", "Hey", "Hello",
                            "Greetings"]
                            
                    },
                    {
                        intent: "chitchat",
                        examples: ["How are you ?",
                               "How are you doing ?"]
                    },
                    {
                        intent: "opening_hours",
                        examples: ["When its opening time?",
                            "When its closing time ?" ,
                          "What time do you open?",
   "What time do you close?" ,
   "What time do you start working?"  ,
   "Are you open at Tuesday ?"]
                    }, 
                    {
                        intent: "menu_questions",
                    examples: [
                            "Can i see your menu ?",
                              "What kind of coffee do you have?",
 "do you sell dessert?",
   "What kind of coffee beans do you have??"]
                    }, {
                        intent: "location",
                        examples: ["Where is your coffee's location?",
                         "Can you send me the location ?"
,                                "Where is the place ?"]
                    }, {
                        intent: "branches",
                        examples: ["How many branches do you have?",
                          "Do you have a branch in Al - Khobar ?"]
                    },
                    {
                        intent: "custom_order",
                        examples: ["Can i make a customized order?",
                           "Do you accept custom order ?",
                               "Do you take special order ?"]
                    },
                    {
                        intent: "music",
                        examples: ["Does your coffee plays music?",
                           "Can i study there ?"]
                    },
                
                ],
                stories: [{
                    story: ""
                    , steps: []
                }]
            }
        })
        db.save

    } catch (err) { console.log(err) }


}
    //  console.log(data)
    //     await db.collection('chatbot').updateOne(
    //         { chatbotname: 2 },
    //         { $push: { 'questions.intents.0.examples': "new data" } }
    //     )
    //     db.save
    // console.log("good job ")
    //     
 



export {add,addNewChatbot};