// Object Literals
// 키-밸류 값으로 {} 내부에 정의 
// 새로 값을 정의할때 new라는 키워드가 필요가 없다 

var morning = {
    coffee: "Caffe Latte",
    bread: {
        withJam: false,
        type: "Rye bread"
    },
    myBreakfast: function(){
        
        console.log("My Breakfast is: "+ {coffee} +" with "+ {bread.type});        
        // 책에서는 이 예제가 동작하는것 처럼 나왔는데 나는 에러가 뜬다.. 왜 안되는지 모르겠당;;
    }
}

morning.myBreakfast();