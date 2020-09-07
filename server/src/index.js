const express = require("express")
const parser = require("body-parser")
const firebase_admin = require("firebase-admin");

const serviceAccount = require("./config/firebase.json");

firebase_admin.initializeApp({
  credential: firebase_admin.credential.cert(serviceAccount),
  databaseURL: "https://notification-example-e4ca1.firebaseio.com"
});


const app = express();

app.use(parser.json())

const port = 3100;

const option = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

app.post("/firebase/notification", (req, res) => {
    firebase_admin.messaging().send(req.body.payload)
    .then(( ) => {
        console.log("Notification sent successfully")
        res.sendStatus(200).end()
    }).catch( error => {
        console.log(error);
    });
});

app.listen(port, () =>{
    firebase_admin.messaging()
    .subscribeToTopic(['dJeWQzlyaKhi56ykA4JSSs:APA91bFmUiyzUES9E0FIL0QrmUmBFgQfbcuSZdOqEOgDHopqZ1U-Y26ZSTp7n2WLZLglcaVLSebnuB3PiW0vEeLPjqwJSgXRFxCqMfifGEdjjY82cI5VdzgyUQ4YcFAnhyHQW9Jc-oA2'], 'topic1' )
    console.log("listening to port"+port)
});