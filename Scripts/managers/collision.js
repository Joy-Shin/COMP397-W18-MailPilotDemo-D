var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            // create two vec2 objects
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("yay");
                            managers.Game.scoreBoard.Score += 100;
                            if (managers.Game.HighScore <= managers.Game.scoreBoard.Score) {
                                managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                managers.Game.HighScore = managers.Game.scoreBoard.HighScore;
                            }
                            break;
                        case "cloud":
                            createjs.Sound.play("thunder");
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map