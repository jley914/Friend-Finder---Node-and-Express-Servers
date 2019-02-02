//path packege to file
var path = require("path");
//routing
module.exports = function (app) {
    //basic route sends the user to home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //route to diplay survay
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // if no matching route defult to home
    app.use("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};


