define("app", function() {

    function App() {};
    
    var calculateWordForNumber = function(number) {
        console.log("current number: " + number);
        console.log(number % 3 === 0);
        if(number % 3 === 0 && number % 5 === 0) {
            return "FizzBuzz";
        }
        if(number % 3 === 0) {
            return "Fizz";
        } 
        if (number % 5 === 0) {
            return "Buzz";
        }
        return "" + number;
    };

    App.prototype.calculate = function(max) {
        var result = "";
        for(i = 1; i < max + 1; i++) {
            result += calculateWordForNumber(i);
        }
        return result;
    };

    return App;

});