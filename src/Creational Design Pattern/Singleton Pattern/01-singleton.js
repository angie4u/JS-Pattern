var mySingleton = (function(){
    var instance;
    function init(){
        function privateMethod(){
            console.log("I am private");
        }
        var privateVariable = "I'm also private";
        var privateRandomNumber = Math.random();

        return{
            publicMethod: function(){
                console.log("The public can see me!");
            },
            publicProperty: "I am also public",
            getRandomNumber: function(){
                return privateRandomNumber;
            }
        }
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }

})();
// it initiate once and later only shows it as a reference
// so that's why the random numbers are same


var myBadSingleton = (function(){
    var instance;
    function init(){
        var privateRandomNumber = Math.random();
        return {
            getRandomNumber: function(){
                return privateRandomNumber;
            }
        }
    }
    return{
        getInstance: function(){
            instance= init();
            return instance;
        }
    }
})();
// this initiates every time, so the values are not same


//Usage:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber())

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber())