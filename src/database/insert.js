import db from '../database/connect.js';
const add = async (question,answer,chatbotname) => {


    try {
        await db.collection('chatbot').insertOne({ question:question , answer: answer, chatbotname:chatbotname });
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}
const addMessage = async (data, author, type) => {

console.log("data send to the database success")
    try {
        await db.collection('chatbot').insertOne({ chatbotname: 2, email: "azozek1420@gmail.com", 
       questions: {
                "intents": [
                    {
                        "name": "greet",
                        "examples": ["- Hi", "Hey!", "Hello"],
                        "responses": ["Hello! How can I help you?", "Hi! I'll be glad to assist you today!"]
                    }],
        stories: [{
                story:"greet and subscribe"
                , steps: ["- intent: greet",
                   " - action: utter_greet",
                   " - intent: subscribe",
                 "   - action: newsletter_form",
                   " - active_loop: newsletter_form"]
}] }})
     console.log(data)
        await db.collection('chatbot').updateOne(
            { chatbotname: 2 },
            { $push: { intent: data } }
        )
        db.save
    } catch (error) {
        console.log(error);
    }

    console.log("good job ")

}

export {add,addMessage};