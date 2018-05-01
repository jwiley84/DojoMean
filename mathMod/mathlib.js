module.exports = function (){
    return {
      add: function(num1, num2) {
          console.log(num1 + " + " + num2 + " = " + (num1+num2));
      },
      multiply: function(num1, num2) {
        console.log(num1 + " * " + num2 + " = " + (num1*num2));
      },
      square: function(num) {
        console.log(num + " ^2 = " + (num*num)); 
      },
      random: function(num1, num2) {
          min = Math.ceil(num1);
          max = Math.ceil(num2);         
          var rando = Math.floor(Math.random() * (max - min)) + min;
        console.log("A number beween " + num1 + " and  " + num2 + " is " + rando);
      }
    }
  };