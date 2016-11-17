require(["app"], function(App) {


    QUnit.test( "first five values", function( assert ) {
        var app = new App();
        var result = app.calculate(5);
        assert.equal(result, "12Fizz4Buzz");
    });

    QUnit.test( "first fifteen values", function( assert ) {
        var app = new App();
        var result = app.calculate(15);
        assert.equal(result, "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
    });

});