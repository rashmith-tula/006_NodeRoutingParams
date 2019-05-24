var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!")  
}); 

app.get("/speak/:animal", function(req, res) {  
   var animal = req.params.animal.toUpperCase();
   
   if(animal.indexOf("PIG") >= 0) {
      res.send("The pig says 'Oink'");  
   } else if(animal.indexOf("COW") >= 0) {
      res.send("The cow says 'Moo'"); 
   } else if(animal.indexOf("DOG") >= 0) {
      res.send("The dog says 'Woof Woof!'"); 
   } else if(animal.indexOf("CAT") >= 0) {
      res.send("The cat says 'Meoh!'");  
   }  else if(animal.indexOf("GOAT") >= 0) {
      res.send("The goat says 'Meah Meah!'"); 
   }  else {
      res.send("Sorry, page not found...What are you doing with your life?");
   }
   
});

app.get("/repeat/:str/:num", function(req, res) {
    var result, num = Number(req.params.num);
    
    for(var i = 0; i < num; i++) {
      if(i == 0) {
        result = req.params.str;   
      } else {   
        result = result + " " + req.params.str;
      }
    };
    
    res.send(result);
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?");  
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is running...");
})