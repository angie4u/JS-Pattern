getCurrentTime = function(){
    var date = new Date(),
           m = date.getMonth() + 1,
           d = date.getDate(),
           y = date.getFullYear()
           t = date.toLocaleTimeString().toLowerCase();

           return(m + "/" + d + "/" + y + " " + t);
}

function addGridRow(data){
    console.log("updated grid component with: "+ data);
}

function updateCounter(data){
    console.log("data last updated at: "+ getCurrentTime() + "with"+ data)
}

gridUpdate = function(topic, data) {
    addGridRow(data);
    updateCounter(data);
}

var subscriber = pubsub.subscribe("newDataAvailable", gridUpdate);

pubsub.publish("newDataAvailable", {
    summary: "Apple mad $5 billion",
    identifier: "APPL",
    stockPrice: 570.91
})

pubsub.publish("newDataAvailable", {
    summary: "Microsoft made $20 billion",
    identifier: "MSFT",
    stockPrice: 120.91
})
