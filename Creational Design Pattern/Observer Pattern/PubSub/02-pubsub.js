var mailCounter = 0;
var subscriber1 = subscribe("inbox/newMessage", function(topic, data){
    console.log("A new message was received: ", topic);

    $(".messageSender").html(data.sender);
    $(".messagePreview").html(data.body);
});

var subscriber2 = subscribe("inbox/newMessage", function(topic, data){
    $(".newMessageCounter").html(mailCounter++);
});

publish("inbox/newMessage",[{
    sender: "Hello@outlook.com",
    body: "hi there!"
}])
