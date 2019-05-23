var messageLogger = function(topics, data){
    console.log("Logging: "+topics+":"+data);
}

var subscription = pubsub.subscribe("inbox/newMessage", messageLogger);
pubsub.publish("inbox/newMessage", "hello World");

pubsub.publish("inbox/newMessage", {
    sender: "hello@outlook.com",
    body: "Hi there!"
})