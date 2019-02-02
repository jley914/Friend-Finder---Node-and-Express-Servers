var path = require("path");

// routes to data that holds the friends data array
var friends = require("../data/friends.js");
// eport api routes
module.exports = function (app) {

    // list of friends 
    app.get("./app/friend", function (req, res) {
        res.json(friends);
    });
    // updates an array of new friends 
    app.post("/app/friends", function (req, res) {
        //new capure  the input
        var newFriend = req.body;
        console.log("newFriend")
        // best match
        var bestMatch = [];

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] == "5 (Strongly Disagree)") {
                newFriend.scores[i] = 5;

            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }
        //compare scores of new friend with each friend in db find the same match
        var bestMatchIndex = 0;
        // scores diffr 
        var bestMatchDifference = 40;

        for (var i = 0; i < friends.length; i++) {
            var totalDiffrence = 0;
            for (var index = 0; index < friends[i].scores.length; index++) {
                var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
                totalDiffrence += differenceOneScore;
            }
            if (totalDiffrence < bestMatchDifference) {
                bestMatchIndex = i;
                bestMatchDifference = totalDiffrence;
            };
        };

        bestMatch = friends[bestMatchIndex];

        friends.push(newFriend);

        res.json(bestMatch)
    });
};