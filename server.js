//npm packeges
var express = require("express");

var path = require("path");
// seed data for database
var friends = require("./app/data/friends.js");


var app = express();

var PORT = process.env.PORT || 3000;
// statik assts in public folder 


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//routs
require("./app/routes/api-routes")(app);

require("./app/routes/html-routes")(app);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'home.html'));
// });

// app.get('/server', (req, res) => {
//     res.sendFile(path.join(__dirname, 'survey.html'));
// });

// app.get('/api-routes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/routs'));
// });

// app.get('/html-routes', (req, res) => {
//     return res.json();
// });


// start srever to listening
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

