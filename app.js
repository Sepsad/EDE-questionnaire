var express = require("express");

var app = express();


app.use(express.static(__dirname +'/public'));

app.use("/jspsych", express.static(__dirname + '/jspsych'));
app.use("/libraries", express.static(__dirname + '/libraries'));

console.log(express.static(__dirname + '/jspsych'));


app.set("views", __dirname + '/public/views');
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


app.get("/", function (request, response) {

    response.render("main.html")

});


var server = app.listen(process.env.PORT || 5000, function () {

    console.log("listening to port %d", server.address().port);
    
})