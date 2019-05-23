// jQuery, Underscore can be passed in as arguements
// In this example, I will create global module and reference it in another module and expand functionality

// global module
var myModule = (function(){
    var module = {};
    var privateValue = "Microsoft";
    
    function privateMethod(){
        console.log("this will not be displayed")
    }
    module.publicProperty = "Company";
    module.publicMethod = function(){
        // privateValue only accessible within this module
        
        console.log("0: " + privateValue);
    }
    return module;
})();

// expand global module my passing module as argument 
function expandMyModule(myModule){
    myModule.addProperty = "this property is added to my original module"
    return myModule.addProperty;
}

myModule.publicMethod();
console.log("1: " + myModule.publicProperty);
console.log("2: " + expandMyModule(myModule));